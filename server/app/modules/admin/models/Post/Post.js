const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = require('@Models');

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
        required: true
    },

    publish_date: {
        type: Date,
        default: Date.now
    },

    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    tags: [mongoose.model('PostTag').schema],

    comments: [mongoose.model('PostComment').schema],

    categories: [mongoose.model('PostCategory').schema]

}, { createdAt: 'created_at', updatedAt: 'updated_at', collection: 'post' });

mongoose.model('Post', postSchema);