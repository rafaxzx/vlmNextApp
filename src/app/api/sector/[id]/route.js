import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const sectorId = parseInt(params.id);
  const sector = await prisma.equipSector.findFirst({
    where: { id: sectorId },
  });

  return NextResponse.json({
    sector,
  });
}

export async function DEL(req, { params }) {
  const sectorId = parseInt(params.id);
  const sectorDeleted = await prisma.equipSector.delete({
    where: { id: sectorId },
  });
  return NextResponse.json(sectorDeleted);
}

export async function PUT(req, { params }) {
  const sectorId = parseInt(params.id);
  const { name } = await req.json();
  const updatedSector = await prisma.equipSector.update({
    where: { id: sectorId },
    data: { name: name },
  });
  return NextResponse.json(updatedSector);
}
