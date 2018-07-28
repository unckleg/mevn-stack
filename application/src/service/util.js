const helpers = {};

/**
 * @param routePath
 * @returns {boolean}
 */
helpers.isAdmin = (routePath) => {
    return helpers.strContains('admin', routePath);
};

helpers.isAuth = (routePath) => {
    return helpers.strContains('admin/auth', routePath);
};

helpers.resolveModuleLayout = (Store, Router) => {
    let module = 'site';
    let currentRoute = Router.currentRoute.path;
    if (helpers.isAdmin(currentRoute)) {
        module = 'admin';
    }

    Store.commit('Layout/SET_MODULE', module);
};

helpers.strContains = (string, subject) => {
    return RegExp('\\b' + string + '\\b').test(subject)
};

export default helpers;
