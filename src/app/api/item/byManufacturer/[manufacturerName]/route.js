import { NextResponse } from "next/server";
import { manufacturerFunctions } from "@/apiFunctions/manufacturerFunctions.js";
import { itemFunctions } from "@/apiFunctions/itemFunctions";

export async function GET(req, { params }) {
  //chamar apiFunction dos fabricantes por pesquisa por nome
  const manufacturerName = params.manufacturerName;
  const manufacturersList = await manufacturerFunctions.searchByName(
    manufacturerName
  );
  //obter ids dos fabricantes encontrados
  const manufacturerListIds = manufacturersList.map((manuf) => manuf.id);
  //pesquisar para cada id de fabricante encontrado na tabela de items
  let listOfItemsPromises = [];
  listOfItemsPromises = await manufacturerListIds.map(
    async (manufacturerId) => {
      return await itemFunctions.searchByManufacturerId(manufacturerId);
      //listOfItemsPromises.push(value);
    }
  );
  const listOfItems = await Promise.all(listOfItemsPromises);
  const listOfItemsFlaterned = listOfItems.flat(Infinity);
  console.log("Outside forEach", listOfItemsFlaterned);
  return NextResponse.json(listOfItemsFlaterned);
}
