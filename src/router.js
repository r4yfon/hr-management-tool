import { createWebHistory, createRouter } from "vue-router";
import ProfileDetails from "./components/ProfileDetails.vue";
import ProfilesList from "./components/ProfilesList.vue";

const routes = [
  { path: "/", component: ProfilesList },
  { path: "/profile/:userId", component: ProfileDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
