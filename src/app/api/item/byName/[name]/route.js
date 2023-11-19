import { itemModel } from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchName = params.name;
  const itemsByName = await itemModel.searchByName(searchName);
  return NextResponse.json(itemsByName);
}
