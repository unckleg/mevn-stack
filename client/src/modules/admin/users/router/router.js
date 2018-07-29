import UsersList from './../views/List';
import UserCreate from './../views/Create';
import Guard from '@util/middleware';

const Routes = [
    {
        name: 'admin_users',
        path: '/admin/users',
        component: UsersList,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Admin Users'
        }
    },
    {
        name: 'admin_users_create',
        path: '/admin/users/create',
        component: UserCreate,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Admin User Create'
        }
    }
];

export default Routes;
