import Helloworld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import Notfound from "./components/Notfound.vue";

export const routes = [
  { path: "/", component: Helloworld },
  { path: "/test", component: Test },
  { path: "/:catchAll(.*)", component: Notfound }
];
