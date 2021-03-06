const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { createdAt: 'created_at', updatedAt: 'updated_at', collection: 'post_status' });

mongoose.model('PostStatus', statusSchema);
