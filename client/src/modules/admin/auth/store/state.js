export default {
    token: localStorage.getItem('auth-token') || '',
    status: false,
    user: localStorage.getItem('auth-user') || {}
};
