import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  GcSpreadSheets,
  GcWorksheet,
  GcColumn
} from '@grapecity/spread-sheets-vue'

import '@/styles/normalize.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('gc-spread-sheets', GcSpreadSheets)
app.component('gc-worksheet', GcWorksheet)
app.component('gc-column', GcColumn)
app.use(createPinia())
app.use(router)

app.mount('#app')
