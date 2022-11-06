import React, { memo, useState, useEffect } from "react"
import type { FC, ReactNode } from "react"
import wgRequest from '@/service'
interface IProps {
  children?: ReactNode
}

interface IBanner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])

  useEffect(() => {
    wgRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.data.banners)
      })
  }, [])

  return (
    <div>
      {
        banners.map((item, index) => {
          return (
            <div key={index}>{item.imageUrl}</div>
          )
        })
      }
    </div>
  )
}

export default memo(Recommend)
