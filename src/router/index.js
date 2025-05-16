import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProductRegistration from '../components/ProductRegistration.vue'
import InventoryManager from '../components/InventoryManager.vue'
import RevenueDashboard from '../components/RevenueDashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/register', name: 'ProductRegistration', component: ProductRegistration },
  { path: '/inventory', name: 'InventoryManager', component: InventoryManager },
  { path: '/revenue', name: 'RevenueDashboard', component: RevenueDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
