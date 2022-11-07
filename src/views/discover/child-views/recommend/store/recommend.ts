import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArtistsList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from "@/views/discover/child-views/recommend/service/recommend";

export const fetchBannerDataAction = createAsyncThunk('banners', async(arg, { dispatch, getState }) => {
  const res = await getBanners()
  dispatch(changeBannersAction(res.data.banners))
})

export const fetchHotRecommendAction = createAsyncThunk('hotRecommend', async(arg, { dispatch }) => {
  const res = await getHotRecommend(8);

  dispatch(changeHotRecommendAction(res.data.result))
})

export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async(arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.data.albums))
  }
)

const rainkingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk('rankingData', async(_, { dispatch }) => {
  // const res = await getPlaylistDetail()
  const promises: Promise<any>[] = []
  for (const id of rainkingIds) {
    promises.push(getPlaylistDetail(id))
  }

  Promise.all(promises).then((res) => {
    const playlists = res.map(item => item.data.playlist)
    dispatch(changeRankingAction(playlists))
  })
})

export const fetchArtistListAction = createAsyncThunk('artistList', async(_, { dispatch}) => {
  const res = await getArtistsList()
  dispatch(changeArtistsListAction(res.data.artists))
})

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  artistsList: any[]
}

const initialState:IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  artistsList: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtistsListAction(state, { payload }) {
      state.artistsList = payload
    }
  },
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingAction,
  changeArtistsListAction
} =  recommendSlice.actions
export default recommendSlice.reducer
