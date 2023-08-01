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

// 对象去重方法
export const objReduction = (tempArr: any, key: any) => {
  let newArr = [] as any;
  for (let i = 0; i < tempArr.length; i++) {
    if (newArr.indexOf(tempArr[i][key]) == -1) {
      newArr.push(tempArr[i][key]);
    } else {
      tempArr.splice(i, 1);
      i--;
    };
  };
  return tempArr;
};