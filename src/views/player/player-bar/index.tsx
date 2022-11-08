import React, {memo, useEffect, useRef, useState} from 'react'
import type {FC, ReactNode} from 'react'
import { PlayerBarWrapper, BarControl, BarOperator, BarPlayerInfo } from "@/views/player/player-bar/style";
import {Link} from "react-router-dom";
import {Slider} from "antd";
import {useAppSelector} from "@/store";
import {getImageSize} from "@/utils/format";
import {shallowEqual} from "react-redux";
import {getSongPlayerUrl} from "@/utils/handle-player";

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong }  = useAppSelector((state) => ({
    currentSong: state.player.currentSong
  }), shallowEqual)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current!.src = getSongPlayerUrl(currentSong.id)

      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true)
          console.log("success")
        })
        .catch((err) => {
          setIsPlaying(false)
          console.log(err)
          window.alert("該歌曲有版權，需換歌曲試試看。")
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
    // console.log(audioRef.current!.currentTime)

    const currentTime = audioRef.current!.currentTime
    console.log("yyy")
    const progress = (currentTime * 1000 / duration) * 100
    setProgress(progress)
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
              <span className="singer-name">{ currentSong.ar[0]?.name }</span>
            </div>
            <div className="progress">
              <Slider value={ progress } step={0.55} tooltip={{formatter: null}}/>
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">03:26</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}/>
    </PlayerBarWrapper>
  )
}
export default memo(PlayerBar);
