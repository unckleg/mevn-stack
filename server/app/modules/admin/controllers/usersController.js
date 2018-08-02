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
    User.findOne({ _id: req.body.user_id }, (error, user) => {
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
    let data = req.body;
    if (data._id) {
        User.findOne({ _id: data._id}, function(err, user) {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: err
                });
            }

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    user[key] = data[key];
                }
            }

            user.save(function(err, data) {
                console.log(err);

                if (err) {
                    res.status(400).json({
                        success: false,
                        message: err
                    });

                    return;
                }

                return res.status(200).json({
                    success: true,
                    message: 'Successfully updated user.',
                    user: data
                });
            })
        });
    }
};

actions.delete = (User) => (req, res) => {
    User.remove({ _id: req.body.user_id }, (error, removed) => {
        if (error) {
            res.status(400).json(error);
        }

        res.status(200).json({ success: true, message: 'User removed successfully.' });
    })
};

actions.validate = (User) => async (req, res) => {
    let data = req.body;
    if (data.rule && data.rule.length > 2) {
        if (data.rule === 'email') {
            try {
                let result = await User.findOne({[data.rule]: data.value});
                if (!result) {
                    return res.status(200).json({ success: true });
                }

                if (result) {
                    if (data.isSameCheck && data.isSameCheckValue === result.email) {
                        return res.status(200).json({ success: true });
                    }

                    return res.status(200).json({
                        success: false,
                        message: `Email: ${data.value} already taken.`
                    });
                }
            } catch (e) {
                return res.status(400).json(result.error);
            }

            return res.status(200).json({ success: true });
        }

        if (data.rule === 'username') {
            try {
                let result = await User.findOne({[data.rule]: data.value});
                if (!result) {
                    return res.status(200).json({ success: true });
                }

                if (result) {
                    if (data.isSameCheck && data.isSameCheckValue === result.username) {
                        return res.status(200).json({ success: true });
                    }

                    return res.status(200).json({
                        success: false,
                        message: `Username: ${data.value} already taken.`
                    });
                }
            } catch (e) {
                return res.status(400).json(result.error);
            }

            return res.status(200).json({ success: true });
        }
    }
};

module.exports = actions;