import { prisma } from "@/lib/prisma";

export const sectorFunctions = {
  searchBySectorName: async function (sectorName) {
    const resultOfSearch = await prisma.equipSector.findMany({
      where: { name: { contains: sectorName } },
    });
    return resultOfSearch;
  },
  getAllSectors: async function () {
    const sectors = await prisma.equipSector.findMany({
      where: {},
    });
    return sectors;
  },
};
