import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import vSelect from "vue-select";
import App from "./App.vue";
import TheContent from "./components/layout/TheContent.vue";
import TheTable from "./components/TheTable.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/tongquan", component: TheContent },
    { path: "/thietbi", component: TheTable },
  ],
});
const app = createApp(App);
app.component("v-select", vSelect);
app.use(router);
app.mount("#app");
