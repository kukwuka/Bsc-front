import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import PrivateInvestors from '@/views/PrivateInvestors.vue';
import TablePage from '@/views/TablePage.vue';
import GraphicsView from '@/views/GraphicsView.vue';
// import Footer from '../../components/Footer.vue';
// import Header from '../../components/Header.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/investors',
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
