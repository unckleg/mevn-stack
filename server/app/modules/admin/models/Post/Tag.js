const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { createdAt: 'created_at', updatedAt: 'updated_at', collection: 'post_tag' });

mongoose.model('PostTag', tagSchema);