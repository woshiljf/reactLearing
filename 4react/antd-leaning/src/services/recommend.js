import request from "./index";

export function getTopBanner () {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend () {
  return request({
    url: "/personalized"
  })
}

export function getNewAlbum (limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}
// 获取歌单详情或者榜单详情
export function getTopList (id) {
  return request({
    url: "playlist/detail",
    params: {
      id
    }
  })
}

// 获取所有榜单
export function getAllTopList () {
  return request({
    url: "/toplist",
  })
}



export function getArtistList (limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}