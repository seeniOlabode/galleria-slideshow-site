import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue"

const routes =  [
    {
        path: "/galleria-slideshow-site/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/galleria-slideshow-site/detail/:name",
        name: "detail",
        component: DetailView,
    },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;