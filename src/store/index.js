
import { getDefaultData } from '@/network/request'

// const store = createStore({
//   state(){
//     return{
//       // 状态
//     }
//   },
//   mutations:{
//     // 改变状态的方法
//   },
//   actions:{
//     // 触发mutations的方法
//   },
//   gettes:{
//     // 获取状态的方法
//   }
// })

export default class Store {
  constructor(){
    this.data={}
  }

  async getData(){
    await this.#xxx()
    return this.data
  }

  async #xxx(){
    let res = await getDefaultData()
    this.data.asd = res
  }
}