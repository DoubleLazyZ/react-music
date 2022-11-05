import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  direction: "left" | "right" | "up" | "down"
}

const initialState: IState = {
  count: 100,
  message: "Hello RTK",
  direction: "left"
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions

export default counterSlice.reducer
