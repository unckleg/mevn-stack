import Service from '@core/service';
import store from '@/store';
import { types, ns } from './../../store/types';

let service = new Service('admin/users');
export const rules = {
    username: {
        getMessage(field, params, data) {
            return (data && data.message) || 'Something went wrong';
        },

        validate(value) {
            return new Promise(async (resolve) => {
                let user = store.getters[types.getters.GET_USER],
                    resp = await service.rest('validate', {
                    rule: 'username',
                    value: value,
                    isSameCheck: !!user._id,
                    isSameCheckValue: !!user._id
                        ? rules.username.clonedState[ns].user.username
                        : null
                    ,
                });

                resolve({
                    valid: resp.success,
                    data: {
                        message: `Username: [${value}] has already been taken.`
                    }
                });
            });
        },

        clonedState: null
    },

    emailExist: {
        getMessage(field, params, data) {
            return (data && data.message) || 'Something went wrong';
        },

        validate(value) {
            return new Promise(async (resolve) => {
                let user = store.getters[types.getters.GET_USER],
                    resp = await service.rest('validate', {
                    rule: 'email',
                    value: value,
                    isSameCheck: !!user._id,
                    isSameCheckValue: !!user._id
                        ? rules.username.clonedState[ns].user.email
                        : null
                    ,
                });

                resolve({
                    valid: resp.success,
                    data: {
                        message: `Email: [${value}] has already been taken.`
                    }
                });
            });
        },

        clonedState: null
    }
};