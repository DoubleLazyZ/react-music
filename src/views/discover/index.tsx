import React, { memo, Suspense } from "react"
import type { FC, ReactNode } from "react"
import { Outlet, Link } from "react-router-dom"
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>Discover
        <div>
          <Link to="/discover/recommend">推薦</Link>
          <Link to="/discover/ranking">排行榜</Link>
          <Link to="/discover/songs">歌單</Link>
          <Link to="/discover/radio">電台</Link>
          <Link to="/discover/artist">歌手</Link>
          <Link to="/discover/album">新曲上架</Link>
        </div>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
    </div>
  )
}

export default memo(Discover)
