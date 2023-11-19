import { itemModel } from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const itemId = parseInt(params.id);
  const itemReturned = await itemModel.returnById(itemId);
  return NextResponse.json(itemReturned);
}
