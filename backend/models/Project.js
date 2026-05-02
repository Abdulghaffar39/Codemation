const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String }, // optional video loop URL
    liveUrl: { type: String },
    images: [{ type: String }],
    category: { type: String, required: true }, // Web, Mobile, UI/UX, etc.
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
