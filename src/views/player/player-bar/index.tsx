import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerBarWrapper, BarControl, BarOperator, BarPlayerInfo } from "@/views/player/player-bar/style";
import { Link } from "react-router-dom";
import { Slider, message } from "antd";
import { useAppDispatch, useAppSelector } from "@/store";
import { getImageSize } from "@/utils/format";
import { shallowEqual } from "react-redux";
import { getSongPlayerUrl } from "@/utils/handle-player";
import { formatTime } from "@/utils/format";
import { changeLyricIndexAction, changePlayModeAction } from '../store/player';

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong, lyrics, lyricIndex, playMode }  = useAppSelector((state) => ({
    currentSong: state.player.currentSong,
    lyrics: state.player.lyrics,
    lyricIndex: state.player.lyricIndex,
    playMode: state.player.playMode
  }), shallowEqual)

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current!.src = getSongPlayerUrl(currentSong.id)

      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((err) => {
          setIsPlaying(false)
          console.log(err)
        })
    }

    setDuration(currentSong.dt)
  }, [currentSong])

  const handleClickPlay = () => {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
        console.log(err)
        window.alert("該歌曲有版權，需換歌曲試試看。")
        setIsPlaying(false)
      })

    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {

    const currentTime = audioRef.current!.currentTime * 1000
    if(!isSliding) {   
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
       }
    }
    
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    message.open({
     content: lyrics[index].text,
     key: 'lyric',
     duration: 0
    })
  }

  const handleSliderAfterChange = (value: number) => {
      const currentTime = value / 100 * duration
      audioRef.current!.currentTime = currentTime / 1000

      setCurrentTime(currentTime)
      setProgress(value)
      setIsSliding(false)
    }

  const handleSliderChanging = (value: number) => {
      setIsSliding(true)
      setProgress(value)

      const currentTime = value / 100 * duration
      setCurrentTime(currentTime)
    }
  const handleClickPlayMode = () => {
      let newPlayMode = playMode + 1 
      if(newPlayMode > 2) newPlayMode = 0
      dispatch(changePlayModeAction(newPlayMode))
    }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={ handleClickPlay }></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src={getImageSize(currentSong.al.picUrl, 40)}/>
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{ currentSong.name }</span>
              <span className="singer-name">{ currentSong.ar?.[0]?.name }</span>
            </div>
            <div className="progress">
              <Slider 
                value={ progress } 
                step={0.55} 
                tooltip={{formatter: null}}
                onAfterChange={handleSliderAfterChange}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="current">{ formatTime(currentTime) }</span>
                <span className="divider">/</span>
                <span className="duration">{ formatTime(currentSong.dt) }</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop" onClick={ handleClickPlayMode }></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}/>
    </PlayerBarWrapper>
  )
}
export default memo(PlayerBar);
