import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store/index"
import Maska from 'maska'

createApp(App)
    .use(Maska)
    .use(store)
    .use(router)
    .mount('#app')
