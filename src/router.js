import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Modules/Dashboard/views/Home.vue";
// import DashboardRoutes from "./Modules/Dashboard/routes";
Vue.use(VueRouter);

const routes = [
  // DashboardRoutes,
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
