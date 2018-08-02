const models = require('@Models');
const passport = require('passport');
const config = require('@config');

module.exports = (app) => {
    const usersController = app.admin.controllers.usersController;
    const authMiddleware = passport.authenticate('jwt', config.session);
    const UserModel = models.User;
    const endpoint = '/api/admin/users';

    // Authorization middleware TODO: Move passport to middleware module
    app.use(authMiddleware);
    app.route(endpoint).post(usersController.list(UserModel));
    app.route(`${endpoint}/create`).post(usersController.create(UserModel));
    app.route(`${endpoint}/get`).post(usersController.find(UserModel));
    app.route(`${endpoint}/update`).post(usersController.update(UserModel));
    app.route(`${endpoint}/delete`).post(usersController.delete(UserModel));
    app.route(`${endpoint}/validate`).post(usersController.validate(UserModel));
};

