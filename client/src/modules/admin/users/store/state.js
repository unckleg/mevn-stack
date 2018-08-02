import { types } from './types';
export const initialState = () => {
    return {
        users: {},
        user: {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            avatar: '',
            about: '',
            is_active: true
        },

        form_action: types.actions.CREATE_USER
    }
};

export default initialState;
