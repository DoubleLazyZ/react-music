import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'

import AreaHeaderV2 from "@/components/area-header-v2";
import { SingerWrapper } from "@/views/discover/child-views/recommend/c-cpns/settle-singer/style";
import { useAppSelector } from "@/store";
import { getImageSize } from "@/utils/format";

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { artistsList } = useAppSelector((state) => ({
    artistsList: state.recommend.artistsList
  }))
  return (
    <SingerWrapper>
      <AreaHeaderV2 title="歌手" moreText="查看全部&gt;" moreLink="/#discover/artists"/>
      <div className='artists'>
        {
          artistsList.map(singer => {
            return (
              <a href='#/discover/artist' key={singer.id} className="item">
                <img src={getImageSize(singer.picUrl, 60)}/>
                <div className="info">
                  <div className="name">{ singer.name }</div>
                  <div className="alias">{ singer.alias.join(" ")}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="#/">申請成為音樂人</a>
      </div>
    </SingerWrapper>
  )
}
export default memo(SettleSinger);
