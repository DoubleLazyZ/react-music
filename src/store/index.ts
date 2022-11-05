import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch  } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from "@/views/discover/child-views/recommend/store/recommend";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
  }
})

// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<IRootState>  = useSelector
export const useAppDispatch: () => DispatchType = useDispatch



export default store
