import { NextResponse } from "next/server";
import { sectorModel } from "@/models/sectorModel";

export async function GET(req, { params }) {
  const sectorId = parseInt(params.id);
  const sector = await sectorModel.searchById(sectorId);

  return NextResponse.json({
    sector,
  });
}

export async function DELETE(req, { params }) {
  const sectorId = parseInt(params.id);
  const sectorDeleted = await sectorModel.deleteById(sectorId);
  return NextResponse.json(sectorDeleted);
}

export async function PUT(req, { params }) {
  const sectorId = parseInt(params.id);
  const sectorData = await req.json();
  const updatedSector = await sectorModel.updateById(sectorId, sectorData);
  return NextResponse.json(updatedSector);
}
