import Dashboard from './../views/Dashboard';
import Guard from '@util/middleware';

const Routes = [
    {
        name: 'admin_dashboard',
        path: '/admin',
        component: Dashboard,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Dashboard'
        }
    }
];

export default Routes;
