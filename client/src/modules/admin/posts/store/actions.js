import {_types} from './types';
import Service from '@core/service';

let service = new Service('admin/posts');
export default {
    [_types.actions.FETCH_POSTS]: ({ commit }) => {
        return new Promise((resolve, reject) => {
            service.rest('')
                .then((data) => {
                    let posts = data.posts;
                    commit(_types.mutations.SET_POSTS, { posts });
                    resolve(data);
                })
                .catch(resp => {
                    reject(resp.data)
                })
            ;
        });
    },
};
