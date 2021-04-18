import request from './index'

export function getGithubuser (name) {

  var data = {
    q: name
  }
  return request({
    url: 'users',
    method: 'get',
    params: data

  })

}