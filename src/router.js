import {createRouter, createWebHistory} from "vue-router";
import Notes from "@/pages/Notes";
import Todo from "@/pages/Todo";
import Notebook from "@/pages/Notebook";


const routes = [
    {
        path: '/',
        component: Notebook
    },
    {
        path: '/notes',
        component: Notes
    },
    {
        path: '/todo',
        component: Todo
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;