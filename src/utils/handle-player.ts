export function getSongPlayerUrl(id: number) {
  return `http://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function formatTime(time: number) {
  const timeSeconds = time / 1000;
  
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  return `${minute}:${second}`
}
