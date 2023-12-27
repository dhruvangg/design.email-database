import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    logoSlug: { type: String },
    templates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Template' }],
}, { timestamps: true });

const Brand = mongoose.models.Brand || mongoose.model('Brand', brandSchema);

export default Brand;
