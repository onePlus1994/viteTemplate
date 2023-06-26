export const convertData = (obj) => {
  let data = JSON.parse(JSON.stringify(obj))
  return data
}