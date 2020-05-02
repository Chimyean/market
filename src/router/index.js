import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/Home')
const Category = () => import('views/Category')
const Cart = () => import('views/Cart')
const Profile = () => import('views/Profile')
const Detail = () => import('views/Detail')



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
