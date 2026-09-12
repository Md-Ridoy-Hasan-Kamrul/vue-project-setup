import './assets/main.css'

import { createApp } from 'vue'
import { setOrigin } from '@kmotion/animation/vue'
import App from './App.vue'
import router from './router'

setOrigin('https://kmotion-animation.netlify.app')

const app = createApp(App)

app.use(router)
app.mount('#app')
