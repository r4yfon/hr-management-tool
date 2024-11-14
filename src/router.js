import { createWebHistory, createRouter } from "vue-router";
import ProfileDetails from "./components/ProfileDetails.vue";
import ProfilesList from "./components/ProfilesList.vue";
import TagCreation from "./components/TagCreation.vue";

const routes = [
  { path: "/", component: ProfilesList },
  { path: "/profile/:userId", component: ProfileDetails, props: true },
  { path: "/tag-creation", component: TagCreation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
