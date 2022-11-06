import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'

import { RecommendWrapper } from './style'
import AreaHeaderV1 from "@/components/area-header-v1";
import {useAppSelector} from "@/store";
import SongMenuItem from "@/components/songs-menu";

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }))

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="熱門推薦"
        keywords={["華語", "流行", "搖滾", "民謠", "電子"]}
        moreLink="/discover/songs"
      >
      </AreaHeaderV1>

      <div className="recommend-list">
        {
          hotRecommends.map(item => {
            return (
              <SongMenuItem key={item.id} itemData={item}/>
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
}
export default memo(HotRecommend);
