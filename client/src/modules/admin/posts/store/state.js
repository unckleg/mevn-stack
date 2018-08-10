import { types } from './types';

export const initialState = () => {
    return {
        posts: {},
        post: {
            title: '',
            text: '',
            status: '',
            publish_date: '',
            tags: [],
            categories: []
        }
    }
};

export default initialState;
