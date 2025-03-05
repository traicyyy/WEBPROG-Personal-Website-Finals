import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css"; // Import global styles


import PersonalProfile from './components/PersonalProfile.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import GuestBook from './components/GuestBook.vue'
import AppFooter from './components/AppFooter.vue'

const app = createApp(App)


app.component('personal-profile', PersonalProfile)
app.component('photo-gallery', PhotoGallery)
app.component('guest-book', GuestBook)
app.component('app-footer', AppFooter)

app.mount('#app')

