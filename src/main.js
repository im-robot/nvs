import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入公共样式
import './style.scss'

const app = createApp(App)
app.use(ElementPlus)
    .use(router)

app.mount('#app')
