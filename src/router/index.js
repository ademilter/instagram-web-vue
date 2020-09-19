import Home from '../views/home/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Direct = () => import(/* webpackChunkName: "profile" */ '../views/direct')
const Explore = () => import(/* webpackChunkName: "profile" */ '../views/explore')
const Profile = () => import(/* webpackChunkName: "profile" */ '../views/profile')
const ProfilePost = () => import(/* webpackChunkName: "profile" */ '../views/profile/post')
const ProfileIGTV = () => import(/* webpackChunkName: "profile" */ '../views/profile/igtv')
const ProfileSave = () => import(/* webpackChunkName: "profile" */ '../views/profile/save')
const ProfileTag = () => import(/* webpackChunkName: "profile" */ '../views/profile/tag')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/direct', name: 'Direct', component: Direct },
  { path: '/explore', name: 'Explore', component: Explore },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      { path: '', name: 'ProfilePost', component: ProfilePost },
      { path: 'igtv', name: 'ProfileIGTV', component: ProfileIGTV },
      { path: 'save', name: 'ProfileSave', component: ProfileSave },
      { path: 'tag', name: 'ProfileTag', component: ProfileTag }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
