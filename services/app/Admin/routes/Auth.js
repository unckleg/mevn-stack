const models = require('@Models');

module.exports = (app) => {
    const AuthController = app.Admin.controllers.AuthController;

    app.route('/').get((request, response) => response.send('Admin API'));

    app.route('/api/admin/auth').post(AuthController.login(models.User));
};