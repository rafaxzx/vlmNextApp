import { NextResponse } from "next/server";
import { itemModel } from "@/models/itemModel";

export async function GET() {
  const itemsLessThenMinimum = await itemModel.lessMinimumStock();
  return NextResponse.json(itemsLessThenMinimum);
}
