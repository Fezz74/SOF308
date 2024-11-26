import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'  

// createApp(App).mount('#app')
library.add(faUserSecret, faHome)
const app = createApp(App)  
app.component('font-awesome-icon', FontAwesomeIcon)  

app.use(router)
app.mount('#app') 