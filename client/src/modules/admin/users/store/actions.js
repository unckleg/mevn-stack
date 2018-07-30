import {_types} from './types';
import axios from '@util/axios';

export default {
    [_types.actions.FETCH_USERS]: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
            axios.get('admin/users')
                .then(resp => {
                    let users = resp.data.users;
                    commit(_types.actions.FETCH_USERS, {users});
                    resolve(resp);
                })
                .catch(({response: {data}}) => {
                    reject(data)
                })
            ;
        });
    }
};
