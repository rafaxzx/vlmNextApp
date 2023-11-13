import { prisma } from "@/lib/prisma";

export const item = {
  searchById: async function (itemId) {
    const itemSearchById = await prisma.item.findFirst({
      where: { id: itemId },
    });
    return itemSearchById;
  },
  searchByManufacturerId: async function (manufacturerId) {
    const resultOfSearch = await prisma.item.findMany({
      where: { manufacturerId: manufacturerId },
    });
    return resultOfSearch;
  },
  searchBySectorId: async function (sectorId) {
    const resultOfSearch = await prisma.item.findMany({
      where: { equipSectorId: sectorId },
    });
    return resultOfSearch;
  },
  getAllItems: async function () {
    const items = await prisma.item.findMany({
      where: {},
    });
    return items;
  },
};
