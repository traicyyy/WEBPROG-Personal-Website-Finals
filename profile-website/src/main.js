import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css"; // Import global styles

import GuestBook from './components/GuestBook.vue'
import Footer from './components/Footer.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)

app.component('guest-book', GuestBook)
app.component('footer', Footer)
app.component('personal-profile', PersonalProfile)

app.mount('#app')

