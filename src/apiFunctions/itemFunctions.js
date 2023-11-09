import { prisma } from "@/lib/prisma";

export const itemFunctions = {
  searchByManufacturerId: async function (manufacturerId) {
    const resultOfSearch = await prisma.item.findMany({
      where: { manufacturerId: manufacturerId },
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
