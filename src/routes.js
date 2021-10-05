export const routes = [
  {
    name: 'home',
    path: "/",
    component: () => import("./views/Home.vue"),
    meta: { title: "Home" },
  },
  {
    name: 'app',
    path: "/app",
    meta: { title: "DeChat", requiresAuth: true },
    component: () => import("./views/Chat.vue"),
  },
  {
    name: 'connect',
    path: "/connect",
    meta: { title: "Connect", requiresLogout: true },
    component: () => import("./views/Connect.vue"),
  },
  {
    name: 'notFound',
    path: "/:path(.*)",
    meta: { title: "404" },
    component: () => import("./views/NotFound.vue"),
  },
];
