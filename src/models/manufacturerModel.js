import { prisma } from "@/lib/prisma";

export const manufacturerModel = {
  createManufacturer: async function (manufacturerData) {
    const { name, logo } = manufacturerData;
    const manufacturerSaved = await prisma.manufacturer.create({
      data: { name: name, logo: logo },
    });
    return manufacturerSaved;
  },
  searchByName: async function (nameForSearch) {
    const manufacturerByName = await prisma.manufacturer.findMany({
      where: { name: { contains: nameForSearch } },
    });
    return manufacturerByName;
  },
  searchById: async function (manufacturerId) {
    const manufacturerById = await prisma.manufacturer.findFirst({
      where: { id: manufacturerId },
    });
    return manufacturerById;
  },
  deleteById: async function (manufacturerId) {
    const manufacturerDeleted = await prisma.manufacturer.delete({
      where: { id: manufacturerId },
    });
    return manufacturerDeleted;
  },
  updateById: async function (manufacturerId, manufacturerData) {
    const { name, logo } = manufacturerData;
    const updatedManufacturer = await prisma.manufacturer.update({
      where: { id: manufacturerId },
      data: { name: name, logo: logo },
    });
    return updatedManufacturer;
  },
  getAllManufacturers: async function () {
    const manufacturers = await prisma.manufacturer.findMany({
      where: {},
    });
    return manufacturers;
  },
};
