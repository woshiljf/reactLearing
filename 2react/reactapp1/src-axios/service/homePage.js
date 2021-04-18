import request from './index'

export function getHomePage () {
  return request({
    url: "homepage/block/page",
  })

}