import { prisma } from "@/lib/prisma";
import { manufacturerModel } from "./manufacturerModel";
import { sectorModel } from "./sectorModel";

export const itemModel = {
  createItem: async function (itemData) {
    const {
      codeIntern,
      name,
      specification,
      equipSectorId,
      manufacturerId,
      trayNumber,
      trayLocation,
      minimumStock,
      maxStock,
      currentStock,
      image,
    } = itemData;
    const itemSaved = await prisma.item.create({
      data: {
        codeIntern: codeIntern,
        name: name,
        specification: specification,
        equipSectorId: equipSectorId,
        manufacturerId: manufacturerId,
        trayNumber: trayNumber,
        trayLocation: trayLocation,
        minimumStock: minimumStock,
        maxStock: maxStock,
        currentStock: currentStock,
        image: image,
      },
    });
    return itemSaved;
  },
  searchById: async function (itemId) {
    const itemSearchById = await prisma.item.findFirst({
      where: { id: itemId },
    });
    return itemSearchById;
  },
  deleteById: async function (itemId) {
    const itemDeleted = await prisma.item.delete({ where: { id: itemId } });
    return itemDeleted;
  },
  updateById: async function (itemId, item) {
    const {
      codeIntern,
      name,
      specification,
      equipSectorId,
      manufacturerId,
      trayNumber,
      trayLocation,
      minimumStock,
      maxStock,
      currentStock,
      image,
    } = item;
    const updatedItem = await prisma.item.update({
      where: { id: itemId },
      data: {
        codeIntern: codeIntern,
        name: name,
        specification: specification,
        equipSectorId: equipSectorId,
        manufacturerId: manufacturerId,
        trayNumber: trayNumber,
        trayLocation: trayLocation,
        minimumStock: minimumStock,
        maxStock: maxStock,
        currentStock: currentStock,
        image: image,
      },
    });
    return updatedItem;
  },
  searchByManufacturerId: async function (manufacturerId) {
    const resultOfSearch = await prisma.item.findMany({
      where: { manufacturerId: manufacturerId },
    });
    return resultOfSearch;
  },
  searchByManufacturerName: async function (manufacturerName) {
    const manufacturerList = await manufacturerModel.searchByName(
      manufacturerName
    );
    const manufacturerListOfIds = manufacturerList.map((element) => element.id);
    const listOfItemsPromises = await manufacturerListOfIds.map(
      async (manufacturerId) =>
        await this.searchByManufacturerId(manufacturerId)
    );
    const listOfItems = await Promise.all(listOfItemsPromises);
    const listOfItemsFlat = listOfItems.flat(Infinity);
    return listOfItemsFlat;
  },
  searchBySectorId: async function (sectorId) {
    const resultOfSearch = await prisma.item.findMany({
      where: { equipSectorId: sectorId },
    });
    return resultOfSearch;
  },
  searchBySectorName: async function (sectorName) {
    const sectorList = await sectorModel.searchBySectorName(sectorName);
    const sectorListOfIds = sectorList.map((element) => element.id);
    const listOfItemsPromises = await sectorListOfIds.map(
      async (sectorId) => await this.searchByManufacturerId(sectorId)
    );
    const listOfItems = await Promise.all(listOfItemsPromises);
    const listOfItemsFlat = listOfItems.flat(Infinity);
    return listOfItemsFlat;
  },
  getAllItems: async function () {
    const items = await prisma.item.findMany({
      where: {},
    });
    return items;
  },
  searchByName: async function (nameForSearch) {
    const resultOfSearch = await prisma.item.findMany({
      where: { name: { contains: nameForSearch } },
    });
    return resultOfSearch;
  },
  searchBySpecification: async function (specificationForSearch) {
    const resultOfSearch = await prisma.item.findMany({
      where: { specification: { contains: specificationForSearch } },
    });
    return resultOfSearch;
  },
  searchByInternCode: async function (internCodeForSearch) {
    const resultOfSearch = await prisma.item.findMany({
      where: { internCode: { contains: internCodeForSearch } },
    });
    return resultOfSearch;
  },
  consumeById: async function (itemId) {
    const itemConsumed = await prisma.item.update({
      where: { id: itemId },
      data: { currentStock: { decrement: 1 } },
    });
    return itemConsumed;
  },
  lessMinimumStock: async function () {
    const itemsLessThenMinimum = await prisma.item.findMany({
      where: {
        currentStock: {
          lt: prisma.item.fields.minimumStock,
        },
      },
    });
    return itemsLessThenMinimum;
  },
  returnById: async function (itemId) {
    const itemReturned = await prisma.item.update({
      where: { id: itemId },
      data: { currentStock: { increment: 1 } },
    });
    return itemReturned;
  },
  zeroStock: async function () {
    const itemsZero = await prisma.item.findMany({
      where: { currentStock: 0 },
    });
    return itemsZero;
  },
};
