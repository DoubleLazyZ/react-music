import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners } from "@/views/discover/child-views/recommend/service/recommend";

export const fetchBannerDataAction = createAsyncThunk('banners', async(arg, { dispatch, getState }) => {
  const res = await getBanners()
  dispatch(changeBannersAction(res.data.banners))
})

interface IRecommendState {
  banners: any[]
}

const initialState:IRecommendState = {
 banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
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

export const { changeBannersAction } =  recommendSlice.actions
export default recommendSlice.reducer
