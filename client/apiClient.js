import request from 'superagent'

export function getKaiList() {
  return request.get('/kai/allKai').then((res) => res.body)
}
