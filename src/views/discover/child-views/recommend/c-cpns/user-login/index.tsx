import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'

import {LoginWrapper} from "@/views/discover/child-views/recommend/c-cpns/user-login/style";

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return (
    <LoginWrapper>
      <p className="desc">
        登入網易雲音樂，可以享受無線收藏的樂趣，並且無限同步到手機。
      </p>
      <a href="#/login" className="sprite_02">用戶登入</a>
    </LoginWrapper>
  )
}
export default memo(UserLogin);
