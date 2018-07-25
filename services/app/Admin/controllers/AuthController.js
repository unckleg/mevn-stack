const jwt    = require('jsonwebtoken');
const config = require('@config');

const actions = {};

actions.login = (User) => (req, res) => {
    User.findOne({ username: req.body.username }, (error, user) => {
        if (error) {
            throw error; return;
        }

        if (!user) {
            res.status(401).send({
                success: false,
                message: 'Authentication failed. User not found.'
            });

            return;
        }

        user.comparePassword(req.body.password, (error, matches) => {
            if (matches && !error) {
                const token = jwt.sign({user}, config.secret);
                res.json({
                    success: true,
                    message: 'Token granted',
                    token,
                    user: user
                });
            }

            res.status(401).send({
                success: false,
                message: 'Authentication failed. Wrong password.'
            });
        });
    });
};

actions.verify = (headers) => {
    if (headers && headers.authorization) {
        const split = headers.authorization.split(' ');
        return (split.length === 2) ? split[1] : null;
    }

    return null;
};

module.exports = actions;