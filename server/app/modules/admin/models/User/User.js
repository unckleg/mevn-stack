const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SchemaOptions = {
    createdAt: 'created_at', updatedAt: 'updated_at'
};

const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    password: {
        type: String
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },

    first_name: {
        type: String,
        trim: true,
        required: true
    },

    last_name: {
        type: String,
        trim: true,
        required: false
    },

    avatar: {
        type: String,
        default: 'https://www.goaltos.com/wp-content/uploads/sites/4559/2018/01/avatar-1577909_960_720.png'
    },

    about: {
        type: String
    },

    is_active: {
        type: Boolean,
        default: false
    }

}, SchemaOptions);

Schema.pre('save', function (next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) {
                return next(error);
            }

            bcrypt.hash(user.password, salt, (error, hash) => {
                if (error) return next(error);
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

Schema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, matches) {
        if (error) {
            return callback(error);
        }

        callback(null, matches);
    });
};

mongoose.model('User', Schema);