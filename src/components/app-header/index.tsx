import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { NavLink } from "react-router-dom";
import {Input} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "@/components/app-header/style";

import headerTitles from "@/assets/data/header-titles.json"


interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showLink(item: any) {
    if (item.type === "path") {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active': undefined
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
    }
  }
  return (
    <HeaderWrapper >
      <div className="content  wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            網易雲音樂
          </a>
          <div className="title-list">
            {
              headerTitles.map(item => {
                return (
                  <div className="item" key={item.title}>
                    { showLink(item) }
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音樂/影片/電台/音樂家" prefix={<SearchOutlined />}/>
           <span className="center">創作者基地</span>
           <span className="login">登入</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}
export default memo(AppHeader);
