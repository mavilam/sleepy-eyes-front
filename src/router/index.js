import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Post from "../components/Post.vue";
import Gallery from "../components/Gallery.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Post,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  }  
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;