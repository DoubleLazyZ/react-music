import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getBanners, getHotRecommend, getNewAlbum} from "@/views/discover/child-views/recommend/service/recommend";

export const fetchBannerDataAction = createAsyncThunk('banners', async(arg, { dispatch, getState }) => {
  const res = await getBanners()
  dispatch(changeBannersAction(res.data.banners))
})

export const fetchHotRecommendAction = createAsyncThunk('hotRecommend', async(arg, { dispatch }) => {
  const res = await getHotRecommend(8);

  dispatch(changeHotRecommendAction(res.data.result))
})



interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
}

const initialState:IRecommendState = {
 banners: [],
  hotRecommends: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     // .addCase(fetchBannerDataAction.pending, (state, action) => {
  //     //    console.log('pedding')
  //     // })
  //     // .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
  //     //   state.banners = action.payload
  //     // })
  //     // .addCase(fetchBannerDataAction.rejected, () => {
  //     //   console.log('rejected')
  //     // })
  // }
})

export const { changeBannersAction, changeHotRecommendAction } =  recommendSlice.actions
export default recommendSlice.reducer
