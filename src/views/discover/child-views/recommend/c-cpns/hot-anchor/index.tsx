import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { AnchorWrapper } from "@/views/discover/child-views/recommend/c-cpns/hot-anchor/style";
import AreaHeaderV2 from "@/components/area-header-v2";

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="熱門主播" />
    </AnchorWrapper>
  )
}
export default memo(HotAnchor);
