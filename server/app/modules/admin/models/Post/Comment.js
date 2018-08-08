const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    text: {
        type: String,
        required: true
    }
}, { createdAt: 'created_at', updatedAt: 'updated_at', collection: 'post_comment' });

mongoose.model('PostComment', commentSchema);