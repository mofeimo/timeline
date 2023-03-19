import {createApp} from 'vue'
import VueKonva from "vue-konva"

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.use(VueKonva, { prefix: 'Konva'})
app.use(router)
app.use(store)

app.config.errorHandler=(err, vm, info)=>{
    console.error(err);
}

app.mount('#app')
