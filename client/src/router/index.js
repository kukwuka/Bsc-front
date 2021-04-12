import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import PrivateInvestors from '@/views/PrivateInvestors.vue';
import TablePage from '@/views/TablePage.vue';
import GraphicsView from '@/views/GraphicsView.vue';
import Settings from "@/views/Settings";
import Profile from "@/views/Profile";

const routes = [
  {
    path: '/',
    name: 'PrivateInvestors',
    component: PrivateInvestors,

  },
  {
    path: '/table',
    name: 'TablePage',
    component: TablePage,
  },
  {
    path: '/graphics',
    name: 'Graphics',
    component: GraphicsView,
  },
  {
    path: '/investors/:id',
    name: 'Profile_detail',
    component: Profile ,
    props: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings ,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
