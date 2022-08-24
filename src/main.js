import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
 
window.Pusher = Pusher;
 
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '74129ca4e1f77dc614ed',
    cluster: 'sa1',
    forceTLS: true
});

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(VueSweetalert2)

app.mount('#app')