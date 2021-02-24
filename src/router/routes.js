import Dashboard from "../components/modules/dashboard";
import Audience from "../components/modules/audience";
import Conversions from "../components/modules/conversions";
import RealTime from "../components/modules/real-time";
import Login from "../components/modules/authentication/index.vue";
export default [
    {
        path: '*',
        meta: {
            title: 'Not Found'
        },
        redirect: {
            path: '/404'
        }
    },
    {
        component: Login,
        name: 'Login',
        path: "/login",
        meta: {
            requiresAuth: false,
            header: 'Login'
        },
    },
    {
        component: Dashboard,
        name: 'Home',
        path: "/dashboard",
        meta: {
            requiresAuth: true,
            header: 'Home'
        },
    },
    {
        component: Audience,
        name: 'Audience',
        path: "/audience",
        meta: {
            requiresAuth: true,
            header: 'Audience'
        },
    },
    {
        component: Conversions,
        name: 'Conversions',
        path: "/conversions",
        meta: {
            requiresAuth: true,
            header: 'Conversions'
        },
    },
    {
        component: RealTime,
        name: 'Real-Time',
        path: "/real-time",
        meta: {
            requiresAuth: true,
            header: 'Real-Time'
        },
    }
];