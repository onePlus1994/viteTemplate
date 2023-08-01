import { Base64 } from "js-base64"
export const convertData = (obj: any) => {
  let data = JSON.parse(JSON.stringify(obj))
  return data
}

// 加密
export const encode = (str: String) => {
  let pwd = Base64.encode(`${str}`)
  return pwd
}

// 解密
export const decode = (str: String) => {
  let pwd = Base64.decode(`${str}`)
  return pwd
}