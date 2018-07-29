import Auth from './../views/Auth';
import Guard from '@util/middleware';

const Routes = [
    {
        name: 'admin_auth',
        path: '/admin/auth',
        component: Auth,
        beforeEnter: Guard.guest,
        meta: {
            title: 'Login'
        }
    }
];

export default Routes;
