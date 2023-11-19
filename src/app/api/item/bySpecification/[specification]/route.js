import { NextResponse } from "next/server";
import { itemModel } from "@/models/itemModel";

export async function GET(req, { params }) {
  const searchSpecification = params.specification;
  const itemsBySpecification = await itemModel.searchBySpecification(
    searchSpecification
  );
  return NextResponse.json(itemsBySpecification);
}
