/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 01:40:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 17:06:31
 * @Description: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
