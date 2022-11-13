import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { RankingWrapper } from "@/views/discover/child-views/recommend/c-cpns/top-ranking/style";
import AreaHeaderV1 from "@/components/area-header-v1";
import {useAppSelector} from "@/store";
import TopRankingItem from "@/views/discover/child-views/recommend/c-cpns/top-ranking-item";
import { shallowEqual } from 'react-redux';

interface IProps {
  children?: ReactNode
}

const TopRaking: FC<IProps> = () => {

  const { rankings = [] } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }), shallowEqual)

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="排行榜" moreLink="/discover/ranking"/>
      <div className="content">
        {
          rankings.map(item => {
            return (
              <TopRankingItem key={item.id} itemData={item}/>
            )
          })
        }
      </div>

    </RankingWrapper>
  )
}
export default memo(TopRaking);
