import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css"; // Import global styles

import GuestBook from './components/GuestBook.vue'
import AppFooter from './components/AppFooter.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)

app.component('guest-book', GuestBook)
app.component('app-footer', AppFooter)
app.component('personal-profile', PersonalProfile)

app.mount('#app')

