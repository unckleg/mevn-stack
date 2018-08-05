const mongoose  = require('mongoose');

require('@Admin/models/User/User');
require('@Admin/models/Post/Post');
require('@Admin/models/Post/Tag');
require('@Admin/models/Post/Comment');
require('@Admin/models/Post/Category');

const models = {
    User: mongoose.model('User'),
    Post: mongoose.model('Post'),
    PostTag: mongoose.model('PostTag'),
    PostComment: mongoose.model('PostComment'),
    PostCategory: mongoose.model('PostCategory'),
    PostStatus: mongoose.model('PostStatus')
};


module.exports = models;