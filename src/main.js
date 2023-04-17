 

import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'

 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faUserSecret, faX } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faBars, faX)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
