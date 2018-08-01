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

actions.create = (User) => (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        is_active: req.body.is_active,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        about: req.body.about
    });

    user.save(error => {
        if (error) {
            return res.status(400).json({
                success: false,
                message: 'There was an error.' + error
            });
        }

        res.json({
            success: true,
            message: 'User created successfully.'
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
    User.remove({ _id: req.body.user_id }, (error, removed) => {
        if (error) {
            res.status(400).json(error);
        }

        res.status(200).json({ success: true, message: 'User removed successfully.' });
    })
};

module.exports = actions;