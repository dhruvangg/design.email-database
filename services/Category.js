import Category from '../models/Category.js';
import connectDB from "../config/db.js"

const createCategory = async ({ name, description, templates }) => {
    try {
        await connectDB()
        const newCategory = await Category.create({
            name,
            description,
            templates,
        });
        console.log('New Category Created:', newCategory.name);
    } catch (error) {
        console.error('Error creating category:', error.message);
    }
};

export { createCategory };
