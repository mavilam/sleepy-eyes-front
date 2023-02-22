import { createWebHistory, createRouter } from "vue-router";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;