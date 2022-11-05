import React, {memo, useRef, useState} from 'react'
import type {FC, ReactNode, ElementRef} from 'react'
import {shallowEqual} from "react-redux";
import { Carousel } from "antd";
import classNames from 'classnames'
import {useAppSelector} from "@/store";
import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from "@/views/discover/child-views/recommend/c-cpns/slider/style";

interface IProps {
  children?: ReactNode
}

const Slider: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }), shallowEqual)

  function handlePrevClick() {
    console.log('prev')
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    console.log('next')
    bannerRef.current?.next()
  }

  function handleBeforeChange() {
    setCurrentIndex(-1)
  }

  function handleAfterChange(current: number) {
    console.log(current)
    setCurrentIndex(current)
  }


  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  console.log(bgImageUrl)

  return (
    <BannerWrapper style={{
      background: `url('${bgImageUrl}') center center / 6000px`
    }}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            ref={bannerRef}
            dots={false}
            autoplay
            autoplaySpeed={3000}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {
              banners.map(item => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                </div>
              )
              })
            }
          </Carousel>
          <div className="dots">
            {
              banners.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span className={classNames('item', { active: index === currentIndex})}></span>
                  </li>
                )
              })
            }
          </div>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
    // <div>
    //   {
    //     banners.map(item => {
    //       return (
    //         <div key={item.imageUrl}>{item.imageUrl}</div>
    //       )
    //     })
    //   }
    // </div>
  )
}
export default memo(Slider);
