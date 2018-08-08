const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    }
}, { createdAt: 'created_at', updatedAt: 'updated_at' });

mongoose.model('PostCategory', categorySchema);