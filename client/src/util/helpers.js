const helpers = {};

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

helpers.removeNamespace = (namespace, types) => {
    let _ = require('lodash');
    return _.reduce(types, (typeObj, typeValue, typeName) => {
        typeObj[typeName] = _.reduce(typeValue, (obj, v, k) => {
            obj[k] = v.replace(namespace, '');
            return obj;
        }, {});
        return typeObj;
    }, {});
};

export default helpers;
