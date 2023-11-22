import { itemModel } from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const itemId = parseInt(params.id);
  const item = await itemModel.searchById(itemId);
  return NextResponse.json({ item });
}

export async function DELETE(req, { params }) {
  const itemId = parseInt(params.id);
  const itemDeleted = await itemModel.deleteById(itemId);
  return NextResponse.json(itemDeleted);
}

export async function PUT(req, { params }) {
  const itemId = parseInt(params.id);
  const item = await req.json();
  const updatedItem = await itemModel.updateById(itemId, item);
  return NextResponse.json(updatedItem);
}
