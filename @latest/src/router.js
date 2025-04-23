import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import MyStories from './views/MyStories.vue'
import WriteStory from './views/WriteStory.vue'
import Home from './views/home.vue'
import WriteEditor from './views/WriteEditor.vue'
import StoryReading from'./views/StoryReading.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/myStories', component: MyStories },
  { path: '/writeStory', component: WriteStory },
  { path: '/editor', component: WriteEditor },
  { path: '/read/:id', component: StoryReading } 
  
]

export default createRouter({
  history: createWebHistory(),
  routes
})
