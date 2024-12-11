import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Present from '../components/Present.vue'

// 配置路由
const routes = [
  {
    path: '/',  
    component: Home,  
    name: 'home',  
  },
  {
    path: '/present',
    component: Present,
    name: 'present',
  },
];

// 创建 Vue Router 实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes,  // 配置的路由
});

export default router;