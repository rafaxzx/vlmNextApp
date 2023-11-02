import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const sectors = await prisma.equipSector.findMany({
    where: {},
  });

  return NextResponse.json({
    sectors,
  });
}

export async function POST(req) {
  const { name } = await req.json();
  const sectorSaved = await prisma.equipSector.create({ data: { name: name } });
  return NextResponse.json(sectorSaved);
}
