
import { getDefaultData, getMenuData } from '@/network/request'

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

export default class store {
  constructor() { 
    this.data = {};
  }

  async getData() {
    await this.#xxx();
    await this.#menu();
    return this.data
  }

  async #xxx() {
    let res = await getDefaultData();
    this.data.asd = res
  }

  async #menu() {
    let res = await getMenuData();
    this.data.menu = res
  }
}