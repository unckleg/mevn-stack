import Guard from '@util/middleware';
import PostList from './../views/List.vue';
import PostCreate from './../views/Create.vue';
import PostEdit from './../views/Edit.vue';

const Routes = [
    {
        name: 'admin_posts',
        path: '/admin/posts',
        component: PostList,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Posts'
        }
    },
    {
        name: 'admin_posts_create',
        path: '/admin/posts/create',
        component: PostCreate,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Post Create'
        }
    },
    {
        name: 'admin_posts_edit',
        path: '/admin/posts/edit/:id',
        component: PostEdit,
        beforeEnter: Guard.auth,
        meta: {
            title: 'Post Edit'
        }
    }
];

export default Routes;
