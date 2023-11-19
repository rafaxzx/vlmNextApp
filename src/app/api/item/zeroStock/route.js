import { itemModel } from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const itemsZero = await itemModel.zeroStock();
  return NextResponse.json(itemsZero);
}
