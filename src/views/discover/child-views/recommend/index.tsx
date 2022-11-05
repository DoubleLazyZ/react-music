import React, { memo, useState, useEffect } from "react"
import type { FC, ReactNode } from "react"
import wgRequest from '@/service'
import {useAppDispatch} from "@/store";
import {fetchBannerDataAction} from "@/views/discover/child-views/recommend/store/recommend";
import Slider from '@/views/discover/child-views/recommend/c-cpns/slider'

interface IProps {
  children?: ReactNode
}


const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <Slider/>
      Recommend
    </div>
  )
}

export default memo(Recommend)
