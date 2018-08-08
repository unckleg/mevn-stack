import List from './../views/List.vue';
import Guard from '@util/middleware';

const Routes = [
    {
        name: 'admin_posts',
        path: '/admin/posts',
        component: List,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Posts'
        }
    }
];

export default Routes;
