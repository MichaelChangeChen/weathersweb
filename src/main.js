import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import router from '@/router/router'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// scss
import '@/scss/reset.css'

const app = createApp(App);

app.use(router);

app.use(VueAxios, axios);

// date format
app.use(moment);

// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)
// BootstrapVue
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

app.mount('#app')
