import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { PlayerBarWrapper, BarControl, BarOperator, BarPlayerInfo } from "@/views/player/player-bar/style";
import {Link} from "react-router-dom";
import {Slider} from "antd";

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src="http://p2.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg?param=40x40"/>
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">十年</span>
              <span className="singer">陳奕迅</span>
            </div>
            <div className="progress">
              <Slider />
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
    </PlayerBarWrapper>
  )
}
export default memo(PlayerBar);
