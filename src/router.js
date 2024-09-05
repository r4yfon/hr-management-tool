import { createMemoryHistory, createRouter } from "vue-router";

import ProfilesList from "./components/ProfilesList.vue";

const routes = [{ path: "/", component: ProfilesList }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
