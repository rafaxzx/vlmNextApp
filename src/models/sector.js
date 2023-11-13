import { prisma } from "@/lib/prisma";

export const sector = {
  searchBySectorName: async function (sectorName) {
    const resultOfSearch = await prisma.equipSector.findMany({
      where: { name: { contains: sectorName } },
    });
    return resultOfSearch;
  },
  searchById: async function (sectorId) {
    const sector = await prisma.equipSector.findFirst({
      where: { id: sectorId },
    });
    return sector;
  },
  getAllSectors: async function () {
    const sectors = await prisma.equipSector.findMany({
      where: {},
    });
    return sectors;
  },
};
