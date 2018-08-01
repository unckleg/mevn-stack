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
            is_active: ''
        }
    }
};

export default initialState;
