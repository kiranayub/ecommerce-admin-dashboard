// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
// import { createPinia } from 'pinia'

// const app = createApp(App)
// app.use(createPinia())
// app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/tailwind.css' //  Tailwind Import



const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')


//createApp(App).mount('#app')