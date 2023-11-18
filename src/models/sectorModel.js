import { prisma } from "@/lib/prisma";

export const sectorModel = {
  createSector: async function (sectorData) {
    const { name } = sectorData;
    const sectorSaved = await prisma.equipSector.create({
      data: { name: name },
    });
    return sectorSaved;
  },
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
  deleteById: async function (sectorId) {
    const sector = await prisma.equipSector.delete({
      where: { id: sectorId },
    });
    return sector;
  },
  updateById: async function (sectorId, sectorData) {
    const { name } = sectorData;
    const updatedSector = await prisma.equipSector.update({
      where: { id: sectorId },
      data: { name: name },
    });
    return updatedSector;
  },
  getAllSectors: async function () {
    const sectors = await prisma.equipSector.findMany({
      where: {},
    });
    return sectors;
  },
};
