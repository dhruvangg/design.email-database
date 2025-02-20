import { db } from "../lib/prisma";
import { createBrand, deleteBrand, updateBrand, getBrand, getBrands, getBrandByQuery } from "../services/brand";

jest.mock("../lib/prisma", () => ({
    db: {
        domains: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
        },
    },
}));

const mockBrand = { id: "1", name: "Test Email", createdAt: new Date(), updatedAt: new Date(), };

describe("Email service", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should fetch emails with pagination", async () => {
        jest.spyOn(db.domains, "findMany").mockResolvedValue([mockBrand]);
        const result = await getBrands(0, 10);
        expect(result).toEqual([mockBrand]);
        expect(db.domains.findMany).toHaveBeenCalledWith({ skip: 0, take: 10 });
    });

    test("should fetch a single email by ID", async () => {
        jest.spyOn(db.domains, "findUnique").mockResolvedValue(mockBrand);
        const result = await getBrand("1");
        expect(result).toEqual(mockBrand);
        expect(db.domains.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
    });

    test("should delete an email by ID", async () => {
        jest.spyOn(db.domains, "delete").mockResolvedValue(mockBrand);
        const result = await deleteBrand("1");
        expect(result).toEqual(mockBrand);
        expect(db.domains.delete).toHaveBeenCalledWith({ where: { id: "1" } });
    });

    test("should update an email by ID", async () => {
        jest.spyOn(db.domains, "update").mockResolvedValue(mockBrand);
        const result = await updateBrand("1", { subject: "Updated Email" });
        expect(result).toEqual(mockBrand);
        expect(db.domains.update).toHaveBeenCalledWith({ where: { id: "1" }, data: { subject: "Updated Email" } });
    });

    test("should create an email by ID", async () => {
        jest.spyOn(db.domains, "create").mockResolvedValue(mockBrand);
        const result = await createBrand({ subject: "New Email" });
        expect(result).toEqual(mockBrand);
        expect(db.domains.create).toHaveBeenCalledWith({ data: { subject: "New Email" } });
    });
});