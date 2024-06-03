import { createWebHistory, createRouter } from "vue-router";
import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContacts from "./views/AppContacts.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: AppHome },
        { path: '/about', name: 'about', component: AppAbout },
        { path: '/projects', name: 'projects', component: AppProjects },
        { path: '/contacts', name: 'contacts', component: AppContacts },

    ]
});

export default routes;