import React, { memo, useState, useEffect } from "react"
import type { FC, ReactNode } from "react"
import { useAppDispatch } from "@/store";
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchRankingDataAction
} from "@/views/discover/child-views/recommend/store/recommend";
import Slider from '@/views/discover/child-views/recommend/c-cpns/slider'

import { RecommendWrapper } from "@/views/discover/child-views/recommend/style";
import HotRecommend from "@/views/discover/child-views/recommend/c-cpns/hot-recommend";
import NewAlbum from "@/views/discover/child-views/recommend/c-cpns/new-album";
import TopRaking from "@/views/discover/child-views/recommend/c-cpns/top-ranking";
interface IProps {
  children?: ReactNode
}


const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <Slider/>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend/>
          <NewAlbum />
          <TopRaking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
