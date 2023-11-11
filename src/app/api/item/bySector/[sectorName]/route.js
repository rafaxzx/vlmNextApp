import { NextResponse } from "next/server";
import { sectorFunctions } from "@/apiFunctions/sectorFunctions.js";
import { itemFunctions } from "@/apiFunctions/itemFunctions";

export async function GET(req, { params }) {
  //chamar apiFunction dos setores por pesquisa por nome
  const sectorName = params.sectorName;
  const sectorList = await sectorFunctions.searchBySectorName(sectorName);
  //obter ids dos setores encontrados
  const sectorIds = sectorList.map((sector) => sector.id);
  //pesquisar para cada id de setores encontrado na tabela de items
  let listOfItemsPromisses = [];
  listOfItemsPromisses = await sectorIds.map(
    async (sectorId) => await itemFunctions.searchBySectorId(sectorId)
  );
  const listOfItems = await Promise.all(listOfItemsPromisses);
  const itemsBySector = listOfItems.flat(Infinity);
  return NextResponse.json(itemsBySector);
}
