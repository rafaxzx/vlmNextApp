import { prisma } from "@/lib/prisma";

export const manufacturer = {
  //For search in database by name and return array of results
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
};