import { NextResponse } from "next/server";
import { manufacturer } from "@/models/manufacturer.js";
import { itemFunctions } from "@/models/item";

export async function GET(req, { params }) {
  //chamar apiFunction dos fabricantes por pesquisa por nome
  const manufacturerName = params.manufacturerName;
  const manufacturersList = await manufacturer.searchByName(manufacturerName);
  //obter ids dos fabricantes encontrados
  const manufacturerListIds = manufacturersList.map((manuf) => manuf.id);
  //pesquisar para cada id de fabricante encontrado na tabela de items
  let listOfItemsPromises = [];
  listOfItemsPromises = await manufacturerListIds.map(
    async (manufacturerId) => {
      return await itemFunctions.searchByManufacturerId(manufacturerId);
    }
  );
  const listOfItems = await Promise.all(listOfItemsPromises);
  const listOfItemsFlaterned = listOfItems.flat(Infinity);
  return NextResponse.json(listOfItemsFlaterned);
}
