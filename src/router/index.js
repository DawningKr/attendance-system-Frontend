import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import TablePage from '../components/TablePage.vue';
import EditPage from '../components/EditPage.vue';
import DeletePage from '../components/DeletePage.vue';
import AddPage from '../components/AddPage.vue'
import SearchPage from '../components/SearchPage.vue';


const routes = [
  {
    path: '/', 
    component: Home, 
    name: 'home'
  },
  {
    path: '/table',
    component: TablePage,
    name: 'tablePage',
  },
  {
    path: '/edit/:id',
    component: EditPage, 
    name: 'editPage'
  }, 
  {
    path: '/delete/:id',
    component: DeletePage, 
    name: 'deletePage'
  }, 
  {
    path: '/add', 
    component: AddPage, 
    name: 'addPage'
  },
  {
    path: '/search',
    component: SearchPage,
    name: 'searchPage'
  }
];


const router = createRouter({
  history: createWebHistory(), 
  routes,  
});

export default router;