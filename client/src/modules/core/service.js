import axios from '@util/axios';

export default class Service {
    /**
     * Creates an instance of Service.
     *
     * @param {any} namespace	namespace of service (without trailing '/')
     *
     * @memberOf Service
     */
    constructor(namespace) {
        this.namespace = namespace;
        this.axios = axios;
    }

    /**
     * Call a service action via REST API
     *
     * @param {any} action	name of action
     * @param {any} params	parameters to request
     * @returns	{Promise}
     *
     * @memberOf Service
     */
    rest(action, params) {
        return new Promise((resolve, reject) => {
            this.axios.request(this.buildAction(action), {
                method: 'post',
                data: params
            }).then((response) => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            }).catch(resp => {
                if (resp.data) {
                    console.error('REST request error!', resp.data.error);
                    reject(resp.data);
                } else {
                    reject(resp);
                }
            });
        });
    }

    buildAction(action) {
        return this.namespace + (action.length > 0 ? '/' + action : '');
    }
}