import { NextResponse } from "next/server";
import { sectorModel } from "@/models/sectorModel";

export async function GET(req) {
  const sectors = await sectorModel.getAllSectors();
  return NextResponse.json({
    sectors,
  });
}

export async function POST(req) {
  const sectorData = await req.json();
  const sectorSaved = await sectorModel.createSector(sectorData);
  return NextResponse.json(sectorSaved);
}
