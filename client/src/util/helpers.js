const helpers = {};
helpers.isAdmin = (routePath) => {
    return helpers.strContains('admin', routePath);
};

helpers.isAuth = (routePath) => {
    return helpers.strContains('admin/auth', routePath);
};

helpers.resolveModuleLayout = (store, Router) => {
    let currentRoute = Router.currentRoute.path;
    let types = require('./../modules/core/store/types').types;
    let module = store.getters[types.getters.GET_MODULE];
    if (helpers.isAdmin(currentRoute)) {
        module = 'admin';
    }

    if (helpers.isAuth(currentRoute)) {
        module = 'auth';
    }

    store.dispatch(types.actions.REGISTER_MODULE, module);
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
