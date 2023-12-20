import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    sender: { type: String, required: true },
    body: { type: [String], required: true },
    html: { type: String, required: true },
    image: { type: String, required: true },
    messageId: { type: String, required: true, unique: true },
}, { timestamps: true });

const Template = mongoose.model('Template', templateSchema);

export default Template;
