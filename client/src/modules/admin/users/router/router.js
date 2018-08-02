import UsersList from './../views/List.vue';
import UserCreate from './../views/Create.vue';
import UsersEdit from './../views/Edit.vue';
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
    },
    {
        name: 'admin_users_edit',
        path: '/admin/users/edit/:id',
        component: UsersEdit,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Admin Users Edit'
        }
    }
];

export default Routes;
