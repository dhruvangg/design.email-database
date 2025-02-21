import { db } from "../lib/prisma.js";

export async function getBrands(offset = 0, limit = 10) {
  const brands = await db.domains.findMany({
    skip: offset,
    take: limit,
  });
  return brands;
}

export async function getBrand(id: number) {
  const brand = await db.domains.findUnique({
    where: {
      id,
    },
  });
  return brand;
}

export async function getBrandByQuery(query: any) {
  const brand = await db.domains.findUnique({
    where: {
      ...query,
    },
  });
  return brand;
}

export async function deleteBrand(id: number) {
  const brand = await db.domains.delete({
    where: {
      id,
    },
  });
  return brand;
}

export async function updateBrand(id: number, data: any) {
  const brand = await db.domains.update({
    where: {
      id,
    },
    data,
  });
  return brand;
}

export async function createBrand(data: any) {
  const brand = await db.domains.create({ data });
  return brand;
}
