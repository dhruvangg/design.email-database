import { db } from "../lib/prisma";
import { createEmail, deleteEmail, getEmail, getEmails, updateEmail } from "../services/email";

jest.mock("../lib/prisma", () => ({
    db: {
        emails: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
        },
    },
}));

const mockEmail = { id: "1", subject: "Test Email", sender: null, body: '', html: '', image: '', messageId: '', tags: null, createdAt: new Date(), updatedAt: new Date(), };

describe("Email service", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should fetch emails with pagination", async () => {
        jest.spyOn(db.emails, "findMany").mockResolvedValue([mockEmail]);
        const result = await getEmails(0, 10);
        expect(result).toEqual([mockEmail]);
        expect(db.emails.findMany).toHaveBeenCalledWith({ skip: 0, take: 10 });
    });

    test("should fetch a single email by ID", async () => {
        jest.spyOn(db.emails, "findUnique").mockResolvedValue(mockEmail);
        const result = await getEmail("1");
        expect(result).toEqual(mockEmail);
        expect(db.emails.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
    });

    test("should delete an email by ID", async () => {
        jest.spyOn(db.emails, "delete").mockResolvedValue(mockEmail);
        const result = await deleteEmail("1");
        expect(result).toEqual(mockEmail);
        expect(db.emails.delete).toHaveBeenCalledWith({ where: { id: "1" } });
    });

    test("should update an email by ID", async () => {
        jest.spyOn(db.emails, "update").mockResolvedValue(mockEmail);
        const result = await updateEmail("1", { subject: "Updated Email" });
        expect(result).toEqual(mockEmail);
        expect(db.emails.update).toHaveBeenCalledWith({ where: { id: "1" }, data: { subject: "Updated Email" } });
    });

    test("should create an email by ID", async () => {
        jest.spyOn(db.emails, "create").mockResolvedValue(mockEmail);
        const result = await createEmail({ subject: "New Email" });
        expect(result).toEqual(mockEmail);
        expect(db.emails.create).toHaveBeenCalledWith({ data: { subject: "New Email" } });
    });
});