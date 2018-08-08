const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('@Admin/models/Post/Tag');
require('@Admin/models/Post/Comment');
require('@Admin/models/Post/Category');
require('@Admin/models/Post/Status');

const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        trim: true
    },

    text: {
        type: String,
        required: true
    },

    status: {
        type: Schema.Types.ObjectId,
        ref: 'PostStatus',
        required: true,
        default: 1
    },

    publish_date: {
        type: Date,
        default: Date.now
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    tags: [mongoose.model('PostTag').schema],

    comments: [mongoose.model('PostComment').schema],

    categories: [mongoose.model('PostCategory').schema]

}, { createdAt: 'created_at', updatedAt: 'updated_at' });

mongoose.model('Post', postSchema);