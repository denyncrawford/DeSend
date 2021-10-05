export const routes = [
  {
    path: "/",
    component: () => import("./views/Home.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/app",
    meta: { title: "DeChat" },
    component: () => import("./views/Chat.vue"),
  },
  {
    path: "/connect",
    meta: { title: "Connect" },
    component: () => import("./views/Connect.vue"),
  },
  {
    path: "/:path(.*)",
    meta: { title: "404" },
    component: () => import("./views/NotFound.vue"),
  },
];
