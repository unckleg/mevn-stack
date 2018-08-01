const models = require('@Models');
const passport = require('passport');
const config = require('@config');

module.exports = (app) => {
    const usersController = app.admin.controllers.usersController;
    const endpoint = '/api/admin/users';

    app.use(passport.authenticate('jwt', config.session));
    app.route(endpoint).get(usersController.list(models.User));
    app.route(`${endpoint}/create`).post(usersController.create(models.User));
    app.route(`${endpoint}/delete`).post(usersController.delete(models.User));
};