import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).use(store).use(router, axios).mount('#app')

