import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

var app = createApp(App)
app.config.globalProperties.colorArray = ['text-blue', 'text-green', 'text-orange', 'text-purple', 'text-brown', 'text-olive']
app.use(router).mount('#app')
