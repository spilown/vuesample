import { createRouter, createWebHistory } from "vue-router";

import Post from "../views/Post.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/about", component: Post },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
