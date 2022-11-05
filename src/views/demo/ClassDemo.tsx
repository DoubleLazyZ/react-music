import React, { PureComponent } from "react";

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
}

interface ISnapshot {
  phone: string
}

class ClassDemo extends PureComponent<IProps, IState>{
  state = {
    message: "Hello World!"
  }

  // constructor(props: any) {
  //   super(props);
  //
  //   this.state = {
  //     message: "Hello World"
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any {
  //   return { phone: '0912-345678'}
  // }
  // componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: ISnapshot) {
  // }

  render(): React.ReactNode {
    return (
      <div>
        Demo
        {this.state.message}
      </div>
    )
  }
}

export default ClassDemo
