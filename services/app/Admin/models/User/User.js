const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

Schema.pre('save', (next) => {
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) {
                return next(error);
            }

            bcrypt.hash(user.password, salt, (error, hash) => {
                if (error) {
                    return next(error);
                }

                user.password = hash;
                next();
            });
        });
    }

    return next();
});

Schema.methods.comparePassword = (password, callback) => {
    bcrypt.compare(password, this.password, (error, matches) => {
        if (error) {
            return callback(error);
        }

        callback(null, matches);
    });
};

mongoose.model('User', Schema);