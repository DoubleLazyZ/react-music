import React, {memo} from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Download: FC<IProps> = (props) => {
  return (
  <div>
    Download
    <div>{props.children}</div>
  </div>)
}

// const Download = (props: IProps) => {
//   return (
//   <div>
//     Download
//     <div>{props.children}</div>
//   </div>)
// }


export default memo(Download)
