const mongoose     = require('mongoose');
const User         = require('@Admin/models/User/User');
const Post         = require('@Admin/models/Post/Post');
const PostTag      = require('@Admin/models/Post/Tag');
const PostComment  = require('@Admin/models/Post/Comment');
const PostCategory = require('@Admin/models/Post/Category');
const PostStatus   = require('@Admin/models/Post/Status');

const models = {
    User: mongoose.model('User'),
    Post: mongoose.model('Post'),
    PostTag: mongoose.model('PostTag'),
    PostComment: mongoose.model('PostComment'),
    PostCategory: mongoose.model('PostCategory'),
    PostStatus: mongoose.model('PostStatus')
};


module.exports = models;