import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import TablePage from '../components/TablePage.vue';
import EditPage from '../components/EditPage.vue';
import DeletePage from '../components/DeletePage.vue';
import AddPage from '../components/AddPage.vue'
import IDSearchPage from '../components/IdSearchPage.vue';
import DateSearchPage from '../components/DateSearchPage.vue';
import { pa } from 'element-plus/es/locales.mjs';
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

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
    path: '/idSearch',
    component: IDSearchPage,
    name: 'idSearchPage'
  }, 
  {
    path: '/dateSearch',
    component: DateSearchPage,
    name: 'dateSearchPage'
  }
];


const router = createRouter({
  history: createWebHistory(), 
  routes,  
});

export default router;