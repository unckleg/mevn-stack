const mongoose  = require('mongoose');
const UserModel = require('@Admin/models/User/User');

const models = {
    User: mongoose.model('User')
};

module.exports = models;