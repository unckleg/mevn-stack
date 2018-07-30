const actions = {};

actions.list = (User) => (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            throw error; return;
        }

        res.json({
            success: true,
            message: '',
            users: users
        });
    });
};

actions.find = (User) => (req, res) => {
    User.findOne({_id: req.body.user_id}, (error, user) => {
        if (error) {
            throw error; return;
        }

        if (!user) {
            res.status(400).json({
                success: false,
                message: 'Can\'t find user with id: ' + req.body.user_id
            });
        }

        if (user) {
            return res.status(200).json({
                success: true,
                message: '',
                user: user
            });
        }
    });
};

actions.update = (User) => (req, res) => {

};

actions.delete = (User) => (req, res) => {

};

module.exports = actions;