import { createRouter, createWebHashHistory } from "vue-router";


const routes = [{
        path: "/",
        name: "Login",
        component: () =>
            import ("../views/account/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("../views/account/register.vue")
    },

];

const router = createRouter({
    history: createWebHashHistory(), //带#号
    // createWebHistory  //不带#号
    routes
});

export default router;