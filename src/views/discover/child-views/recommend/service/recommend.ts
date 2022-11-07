import wgRequest from "@/service";

export function getBanners() {
  return wgRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return wgRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}


export function getNewAlbum(limit = 10) {
  return wgRequest.get({
    url: "/album/newest",
    params: {
      limit
    }
  })
}


export function getPlaylistDetail(id: number) {
  return wgRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getArtistsList() {
  return wgRequest.get({
    url: '/artist/list',
    params: {
      limit: 5
    }
  })
}
