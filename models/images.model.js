const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    name: { type: String, required: true },
    filename:{ type: String, required: true },
    path:{ type: String },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('images',imageSchema,'images')