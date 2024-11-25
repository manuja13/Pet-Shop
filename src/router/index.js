import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../components/LoginView.vue';
import RegisterView from '../components/RegisterView.vue';
import DashBoard from '../components/DashBoard.vue';
import CatFacts from '../components/CatFacts.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
},
{
    path: '/register',
    name: 'Register',
    component: RegisterView
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard
},
{
    path: '/catfacts',
    name: 'CatFacts',
    component: CatFacts
},

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Productlist',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/petcaretips',
    name: 'petcaretips',
    component: () => import('../views/PetCareTips.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutNav.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
