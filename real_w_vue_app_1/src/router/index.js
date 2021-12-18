/* eslint-disable */ 

import { createRouter, createWebHashHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import EventDetails from '../views/EventDetails.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: "/About",
    name: "AboutPage",
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
