import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import MyStories from './views/MyStories.vue'
import WriteStory from './views/WriteStory.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/mystories', component: MyStories },
  { path: '/write', component: WriteStory }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
