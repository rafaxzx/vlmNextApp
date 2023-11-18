import { sectorModel } from "@/models/sectorModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let nameReq = params.name;
  const sectorByName = await sectorModel(nameReq);
  return NextResponse.json(sectorByName);
}
