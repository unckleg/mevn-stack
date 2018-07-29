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
    let currentRoute = Router.currentRoute.path;
    let module = 'site';
    if (helpers.isAdmin(currentRoute)) {
        module = 'admin';
    }

    if (helpers.isAuth(currentRoute)) {
        module = 'auth';
    }

    Store.commit('Layout/SET_MODULE', module);
};

helpers.strContains = (string, subject) => {
    return RegExp('\\b' + string + '\\b').test(subject)
};

export default helpers;
