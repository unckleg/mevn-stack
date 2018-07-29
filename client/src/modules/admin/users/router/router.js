import UsersList from './../views/List';
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
    }
];

export default Routes;
