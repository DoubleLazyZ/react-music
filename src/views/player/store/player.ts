import { createSlice } from "@reduxjs/toolkit"

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
    "name": "回答",
    "id": 1994863874,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 12037117,
        "name": "YOUNG",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 8,
    "v": 3,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 154263803,
      "name": "回答",
      "picUrl": "https://p1.music.126.net/mZQ8d3zO-g4MDKGmudIk2w==/109951168029326546.jpg",
      "tns": [],
      "pic_str": "109951168029326546",
      "pic": 109951168029326540
    },
    "dt": 149787,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 5994285,
      "vd": -52480,
      "sr": 48000
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 3596589,
      "vd": -49862,
      "sr": 48000
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 2397741,
      "vd": -48192,
      "sr": 48000
    },
    "sq": {
      "br": 743157,
      "fid": 0,
      "size": 13914434,
      "vd": -52483,
      "sr": 48000
    },
    "hr": {
      "br": 1506391,
      "fid": 0,
      "size": 28204767,
      "vd": -52477,
      "sr": 48000
    },
    "a": null,
    "cd": "01",
    "no": 0,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 0,
    "s_id": 0,
    "mark": 536870912,
    "originCoverType": 1,
    "originSongSimpleData": null,
    "tagPicList": null,
    "resourceState": true,
    "version": 3,
    "songJumpInfo": null,
    "entertainmentTags": null,
    "awardTags": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "mst": 9,
    "cp": 0,
    "rtype": 0,
    "rurl": null,
    "mv": 0,
    "publishTime": 0
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
