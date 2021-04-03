import { API_BASE } from '../utils/config'

let token = localStorage.getItem('rwd_t')
export const GetApiUrl = (url:string) => API_BASE + url

export const request = (
  url: string,
  method: string,
  payload?: any,
  headers?: any
) => {
  headers = headers || {}
  console.log("token------------",token)
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  url = API_BASE + url

  return fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(payload),
  })
}

export const requestFileUpload = (
  url: string,
  method: string,
  payload?: any,
  headers?: any
) => {
  headers = headers || {}

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  url = API_BASE + url

  return fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      ...headers,
    },
    body: payload,
  })
}

export const post = (url: string, payload: any) => {
  return request(url, 'POST', payload)
}

export const put = (url: string, payload: any) => {
  return request(url, 'PUT', payload)
}

export const get = (url: string) => {
  return request(url, 'GET')
}

export const postFile = (url: string, payload: any) => {
  return requestFileUpload(url, 'POST', payload)
}
export const del = (url: string) => {
  return request(url, 'DELETE')
}

export const patch = (url: string, payload: any) => {
  return request(url, 'PATCH', payload)
}

export const patchFile = (url: string, payload: any) => {
  return requestFileUpload(url, 'PATCH', payload)
}

export const deleteItem = (url: string) => {
  return request(url, 'DELETE')
}

export const update = (url: string, paylad: any) => {
  return request(url, 'PATCH', paylad)
}

export const getJSON = async (url: string) => {
  const res = await get(url)
  return res.json()
}

export const postJSON = async (url: string, payload: any) => {
  const res = await post(url, payload)
  return res.json()
}
