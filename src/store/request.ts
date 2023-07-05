
import { getLoginData, getMenuData } from '@/network/request'
var data: any = {}

export default class store {
    async getData(str: String) {
        if (str === 'login') {
            await this.#login();
        } else if (str === 'menu') {
            await this.#menu();
        }
        return data
    }

    async #login() {
        await getLoginData().then(res => {
            data.login = res
        });
    }

    async #menu() {
        await getMenuData().then(res => {
            data.menu = res
        });
    }
}