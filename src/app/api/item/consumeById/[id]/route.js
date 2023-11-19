import { NextResponse } from "next/server";
import { itemModel } from "@/models/itemModel";

export async function PUT(req, { params }) {
  const itemId = parseInt(params.id);
  const itemConsumed = await itemModel.consumeById(itemId);
  return NextResponse.json(itemConsumed);
}
