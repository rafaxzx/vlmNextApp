import { NextResponse } from "next/server";
import { itemModel } from "@/models/itemModel";

export async function GET(req, { params }) {
  const manufacturerName = params.manufacturerName;
  const items = await itemModel.searchByManufacturerName(manufacturerName);
  return NextResponse.json(items);
}
