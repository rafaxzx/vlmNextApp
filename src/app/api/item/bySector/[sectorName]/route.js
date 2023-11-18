import { NextResponse } from "next/server";
import { itemModel } from "@/models/itemModel";

export async function GET(req, { params }) {
  const sectorName = params.sectorName;
  const itemsBySector = await itemModel.searchBySectorName(sectorName);
  return NextResponse.json(itemsBySector);
}
