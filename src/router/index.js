import { createRouter, createWebHistory,useRouter } from 'vue-router'
// User site //
import HomeView from '@/views/user/HomeView.vue'
import CartView from '@/views/user/CartView.vue'
import SearchView from '@/views/user/SearchView.vue'
import ConfirmView from '@/views/user/ConfirmView.vue'
import SuccessView from '@/views/user/SuccessView.vue'
import ShelftView from '@/views/user/ShelftView.vue'

// Admin Site //
import AdminIndex from '@/views/admin/AdminIndexView.vue'
import Dashboard from '@/views/admin/DashboardView.vue'
import Login from '@/views/admin/LoginView.vue'
// Product 
import productList from '@/views/admin/product/ListView.vue'
import productUpdate from '@/views/admin/product/UpdateView.vue'
// Order
import orderDetail from '@/views/admin/order/DetailView.vue'
import orderList from '@/views/admin/order/ListView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // User Site //
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: ConfirmView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/shelft',
      name: 'shelft',
      component: ShelftView
    },
    
    // Admin Site //
    {
      path: '/admin/login',
      name: 'admin-login',
      component: Login
    },
    {
      path: '/admin/index',
      name: 'admin-index',
      component: AdminIndex
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: Dashboard
    },
    // prodcut
    {
      path: '/admin/product/list',
      name: 'admin-products-list',
      component: productList
    },
    {
      path: '/admin/product/create',
      name: 'admin-products-create',
      component: productUpdate
    },
    {
      path: '/admin/product/update/:id',
      name: 'admin-products-update',
      component: productUpdate
    },
    {
      path: '/admin/order/list',
      name: 'admin-orders-list',
      component: orderList
    },
    {
      path: '/admin/order/detail/:id',
      name: 'admin-orders-detail',
      component: orderDetail
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // ตรวจสอบว่ามี hash (fragment) หรือไม่
    if (savedPosition) {
      return savedPosition; // ถ้าผู้ใช้กดปุ่ม back/forward ให้เลื่อนไปตำแหน่งเดิม
    } else if (to.hash) {
      return {
        el: to.hash, // เลื่อนไปยังตำแหน่งที่มี id ตรงกับ hash
        behavior: 'smooth' // เลื่อนแบบนุ่มนวล
      };
    } else {
      return { top: 0 }; // ถ้าไม่มี hash ให้เลื่อนไปบนสุดของหน้า
    }
  }
})

export default router
