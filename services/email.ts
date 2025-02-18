import { db } from "../lib/prisma.js";

async function getEmails(offset = 0, limit = 10) {
    const templates = await db.emails.findMany({
        skip: offset,
        take: limit,
    });
    return templates;
}

async function getEmail(id: string) {
    const template = await db.emails.findUnique({
        where: {
            id,
        },
    });
    return template;
}

async function deleteEmail(id: string) {
    const template = await db.emails.delete({
        where: {
            id,
        },
    });
    return template;
}

async function updateEmail(id: string, data: any) {
    const template = await db.emails.update({
        where: {
            id,
        },
        data,
    });
    return template;
}

async function createEmail(data: any) {
    const template = await db.emails.create({
        data,
    });
    return template;
}

export { getEmails, getEmail, deleteEmail, updateEmail, createEmail };
