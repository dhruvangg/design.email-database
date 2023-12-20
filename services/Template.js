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
        console.log('New Task Created:', newTemplate.subject);
    } catch (error) {
        console.error('Error creating task:', error.message);
    }
};

const getTemplates = async (page = 1, limit = 4) => {
    try {
        await connectDB();
        const skip = (page - 1) * limit;
        const templates = await Template.find().skip(skip).limit(limit).exec()
        const count = await Template.countDocuments();
        return { success: true, page, limit, count, templates };
    } catch (error) {
        return { success: false, error: error.message };
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

export { createTemplate, getTemplates, getTemplate }



