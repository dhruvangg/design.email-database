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

/**
 * Retrieves a paginated list of templates from the database.
 *
 * This function connects to the database and fetches a specific page of templates, 
 * excluding their HTML content. It also returns the total count of templates 
 * available for pagination purposes. If there's an error during the database
 * operation, the function throws an error with the relevant message.
 *
 * @param {number} [page=1] - The page number of the templates to retrieve.
 * @param {number} [limit=10] - The maximum number of templates to retrieve per page.
 * @returns {Promise<Object>} A promise that resolves to an object containing the pagination data and a list of templates.
 *                            The returned object has the structure { page, limit, count, templates }.
 * @throws {Error} If there is an issue during the database operation, an error is thrown with the specific error message.
 */

const getTemplates = async (page = 1, limit = 10) => {
    try {
        await connectDB();
        const skip = (page - 1) * limit;
        const templates = await Template.find().select({ "html": 0 }).skip(skip).limit(limit).sort({ createdAt: -1 }).exec()
        const count = await Template.countDocuments();
        return { page, limit, count, templates };
    } catch (error) {
        throw new Error(error.message);
    }
}

/**
 * Retrieves templates based on the specified query conditions.
 *
 * @param {Object} condition - The query conditions to filter the templates.
 * @param {Object|null} [select=null] - Specific fields to select in the returned documents.
 * @param {number|null} [limit=null] - Limit on the number of templates to retrieve.
 * @returns {Promise<Array>} A promise that resolves to an array of templates matching the conditions.
 * @throws {Error} If there is an error during database operation.
 */

const getTemplatesByQuery = async (condition, select = null, limit = null) => {
    try {
        await connectDB();
        let query = Template.find(condition);
        if (select) {
            query = query.select(select);
        }
        if (limit) {
            query = query.limit(limit);
        }
        const templates = await query.sort({ createdAt: -1 }).exec()
        return templates;

    } catch (error) {
        throw new Error(error.message);
    }
}

/**
 * Retrieves a specific template by its ID.
 *
 * @param {string} id - The unique identifier of the template.
 * @returns {Promise<Object>} A promise that resolves to an object containing the template data.
 *                            Returns success status and data, or failure status and error message.
 */

const getTemplate = async (id) => {
    try {
        await connectDB();
        const data = await Template.findById(id).exec();
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

/**
 * Deletes a specific template by its ID.
 *
 * @param {string} id - The unique identifier of the template to delete.
 * @returns {Promise<Object>} A promise that resolves to the deletion result. 
 *                            Returns the deleted data or an error message if failed.
 */

const deleteTemplate = async (id) => {
    try {
        await connectDB();
        const data = await Template.findByIdAndDelete(id)
        return { data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

/**
 * Deletes multiple templates based on their IDs.
 *
 * @param {Array<string>} ids - An array of template IDs to delete.
 * @returns {Promise<Object>} A promise that resolves to the result of the deletion operation.
 *                            Indicates success or failure and includes data or error message.
 */

const deleteTemplates = async (ids) => {
    try {
        await connectDB();
        const data = await Template.deleteMany({ _id: { $in: ids } });
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

/**
 * Updates a template based on the given condition.
 *
 * @param {Object} condition - The conditions to find the template to update.
 * @param {Object} data - The data to be updated in the template.
 * @returns {Promise<Object>} A promise that resolves to the updated template document.
 * @throws {Error} If there is an error during the update operation.
 */


const updateTemplate = async (condition, data) => {
    try {
        await connectDB();
        const result = await Template.findOneAndUpdate(condition, data, {
            new: true,
            runValidators: true
        });
        return result
    } catch (error) {
        return { error: error.message }
    }
}

/**
 * Updates a specific template by its ID.
 *
 * @param {Object} condition - The condition to find the template (usually the ID).
 * @param {Object} data - The data to update in the template.
 * @returns {Promise<Object>} A promise that resolves to the updated template document.
 * @throws {Error} If there is an error during the update operation.
 */

const updateTemplateById = async (condition, data) => {
    try {
        await connectDB();
        const result = await Template.findOneAndUpdate(condition, data, {
            new: true,
            runValidators: true
        });
        return result
    } catch (error) {
        return { error: error.message }
    }
}

/**
 * Updates multiple templates based on the given condition.
 *
 * @param {Object} condition - The conditions to find the templates to update.
 * @param {Object} updateData - The data to be updated in the templates.
 * @returns {Promise<Object>} A promise that resolves to the result of the update operation.
 * @throws {Error} If there is an error during the update operation.
 */

const updateManyTemplates = async (condition, updateData) => {
    try {
        await connectDB();
        const result = await Template.updateMany(condition, updateData)
        return result
    } catch (error) {
        return { error: error.message }
    }
}


export {
    createTemplate,
    updateTemplate, updateTemplateById, updateManyTemplates,
    getTemplates, getTemplate, getTemplatesByQuery,
    deleteTemplate, deleteTemplates
}



