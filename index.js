import {
    getTemplate, getTemplates, getTemplatesByQuery,
    createTemplate, updateTemplates,
    deleteTemplate, deleteTemplates
} from './services/Template.js'
import { createBrand } from './services/Brand.js'
import { createCategory } from './services/Category.js'
import Template from './models/Template.js'

export {
    Template, updateTemplates,
    getTemplate, getTemplates, getTemplatesByQuery,
    createTemplate, createBrand, createCategory,
    deleteTemplate, deleteTemplates
};