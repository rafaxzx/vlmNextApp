import { NextResponse } from "next/server";
import { itemModel } from "@/models/itemModel";

export async function GET(req) {
  const items = await itemModel.getAllItems();
  return NextResponse.json({ items });
}
export async function POST(req) {
  const itemData = await req.json();
  const itemSaved = await itemModel.createItem(itemData);
  return NextResponse.json(itemSaved);
}
