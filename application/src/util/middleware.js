import auth from './auth'

export default {
    guest (to, from, next) {
        next(!auth.isAuthenticated())
    },

    auth (to, from, next) {
        next(auth.isAuthenticated() ? true : {
            path: '/admin/auth'
        })
    }
}
