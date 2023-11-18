import { itemModel } from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchInternCode = params.internCode;
  const itemsByInterCode = await itemModel.searchByInternCode(searchInternCode);
  return NextResponse.json(itemsByInterCode);
}
