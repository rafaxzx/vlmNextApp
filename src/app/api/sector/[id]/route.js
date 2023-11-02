import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  let sectorId = parseInt(params.id);
  const sector = await prisma.equipSector.findFirst({
    where: { id: sectorId },
  });

  return NextResponse.json({
    sector,
  });
}
