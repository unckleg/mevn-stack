import Auth from './../views/Auth';
import Guard from './../../../../service/middleware';

const Routes = [
    {
        name: 'auth',
        path: '/admin/auth',
        component: Auth,
        beforeEnter: Guard.guest,
        meta: {
            title: 'Login'
        }
    }
];

export default Routes;
