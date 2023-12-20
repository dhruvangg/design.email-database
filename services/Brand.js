import Brand from '../models/Brand.js';
import connectDB from "../config/db.js"

const createBrand = async ({ name, logoSlug, templates }) => {
    try {
        await connectDB()
        const newBrand = await Brand.create({
            name,
            logoSlug,
            templates,
        });
        console.log('New Brand Created:', newBrand.name);
    } catch (error) {
        console.error('Error creating brand:', error.message);
    }
};

export { createBrand };
