import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import type {FC, ReactNode} from 'react'
import {HeaderV1Wrapper} from "@/components/area-header-v1/style";

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = "默認標題",
    keywords = [],
    moreText = "更多",
    moreLink="/"
  } = props

  // keywords = ["華語", "流行", "搖滾"]

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <div className="title">{ title }</div>
        <div className="keywords">
          {
            keywords.map(item => {
              return (
                <div className="item" key={item}>
                  <span className="link">{ item }</span>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <Link to={ moreLink }>{ moreText }</Link>
        <i className="icon sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}
export default memo(AreaHeaderV1);
