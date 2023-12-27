import Template from "../models/Template.js";
import connectDB from "../config/db.js"

const createTemplate = async ({ subject, sender, body, html, image, messageId }) => {
    try {
        await connectDB();
        const newTemplate = await Template.create({
            subject,
            sender,
            body,
            html,
            image,
            messageId
        });
        return newTemplate;
    } catch (error) {
        throw error
    }
};

const getTemplates = async (page = 1, limit = 4) => {
    try {
        await connectDB();
        const skip = (page - 1) * limit;
        const templates = await Template.find().select({ "html": 0 }).skip(skip).limit(limit).sort({ createdAt: -1 }).exec()
        const count = await Template.countDocuments();
        return { page, limit, count, templates };
    } catch (error) {
        return { error: error.message };
    }
}

const getTemplatesByQuery = async (query) => {
    try {
        await connectDB();
        const templates = await Template.find({ $text: { $search: query } }).select({ "html": 0 }).sort({ createdAt: -1 }).exec()
        return { query, templates };
    } catch (error) {
        return { error: error.message };
    }
}

const getTemplate = async (id) => {
    try {
        await connectDB();
        const data = await Template.findById(id).exec();
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

const deleteTemplate = async (id) => {
    try {
        await connectDB();
        const data = await Template.findByIdAndDelete(id)
        return { data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

const deleteTemplates = async (ids) => {
    try {
        await connectDB();
        const data = await Template.deleteMany({ _id: { $in: ids } });
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}


export {
    createTemplate,
    getTemplates, getTemplate, getTemplatesByQuery,
    deleteTemplate, deleteTemplates
}



