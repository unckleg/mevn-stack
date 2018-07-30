const models = require('@Models');
const passport = require('passport');
const config = require('@config');

module.exports = (app) => {
    const usersController = app.admin.controllers.usersController;

    app.use(passport.authenticate('jwt', config.session));
    app.route('/api/admin/users').get(usersController.list(models.User));
};