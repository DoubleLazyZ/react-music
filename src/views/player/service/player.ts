import wgRequest from "@/service";

export function getSongDetail(ids: number) {
  return wgRequest.get({
    url: "/song/detail",
    params: {
      ids,
    }
  })
}

export function getSongLyric(id: number) {
  return wgRequest.get({
    url: "/lyric",
    params: {
      id
    }
  })
}
