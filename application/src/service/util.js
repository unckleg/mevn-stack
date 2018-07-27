const helpers = {};

/**
 * @param routePath
 * @returns {boolean}
 */
helpers.isAdmin = (routePath) => {
    return new RegExp('\\b' + 'admin' + '\\b').test(routePath);
};

helpers.resolveModuleLayout = (Store, Router) => {
    let module = 'site';
    if (helpers.isAdmin(Router.currentRoute.path)) {
        module = 'admin';
    }

    Store.commit('Layout/SET_MODULE', module);
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
