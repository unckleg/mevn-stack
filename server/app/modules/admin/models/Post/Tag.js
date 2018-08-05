const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { createdAt: 'created_at', updatedAt: 'updated_at' });

mongoose.model('PostTag', tagSchema);