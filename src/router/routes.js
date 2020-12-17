import Dashboard from "../components/modules/dashboard";
import Audience from "../components/modules/audience";
import Conversions from "../components/modules/conversions";
import RealTime from "../components/modules/real-time";
export default [
    {
        component: Dashboard,
        name: 'Home',
        path: "/dashboard"
    },
    {
        component: Audience,
        name: 'Audience',
        path: "/audience"
    },
    {
        component: Conversions,
        name: 'Conversions',
        path: "/conversions"
    },
    {
        component: RealTime,
        name: 'Real-Time',
        path: "/real-time"
    }
];