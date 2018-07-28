const mongoose  = require('mongoose');
const UserModel = require('@Admin/models/user/user');

const models = {
    User: mongoose.model('User')
};

module.exports = models;