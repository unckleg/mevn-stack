const models = require('@Models');
const passport = require('passport');
const config = require('@config');
const uploader = require('@core/util/uploader');

module.exports = (app) => {
    const
        usersController = app.admin.controllers.usersController,
        UserModel = models.User,
        endpoint = '/api/admin/users',
        upload = uploader()
    ;

    // Authorization middleware
    // TODO: Move passport to middleware module
    app.use(passport.authenticate('jwt', config.session));

    app.route(endpoint)
        .post(usersController.list(UserModel));
    app.route(`${endpoint}/create`)
        .post(usersController.create(UserModel));
    app.route(`${endpoint}/get`)
        .post(usersController.find(UserModel));
    app.route(`${endpoint}/update`)
        .post(usersController.update(UserModel));
    app.route(`${endpoint}/delete`)
        .post(usersController.delete(UserModel));
    app.route(`${endpoint}/validate`)
        .post(usersController.validate(UserModel));
    app.route(`${endpoint}/uploadAvatar`)
        .post(upload.single('avatar'), usersController.uploadAvatar(UserModel));
};
