const models = require('@Models');

module.exports = (app) => {
    const authController = app.admin.controllers.authController;

    app.route('/')
        .get((request, response) => response.send('API Home.'));
    app.route('/api/admin/auth')
        .post(authController.login(models.User));
};