const models = require('@Models');
const passport = require('passport');
const config = require('@config');
const uploader = require('@core/util/uploader');

const router = (app) => {
    const
        postsController = app.admin.controllers.postsController,
        PostModel = models.Post,
        endpoint = '/api/admin/posts',
        upload = uploader()
    ;

    // Authorization middleware
    // TODO: Move passport to middleware module
    app.use(passport.authenticate('jwt', config.session));
    app.route(endpoint).post(postsController.list(PostModel));
};

module.exports = router;
