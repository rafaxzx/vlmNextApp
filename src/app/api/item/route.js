import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const items = await prisma.item.findMany({
    where: {},
  });
  return NextResponse.json({ items });
}
export async function POST(req) {
  const {
    codeIntern,
    name,
    specification,
    equipSectorId,
    manufacturerId,
    trayNumber,
    trayLocation,
    minimumStock,
    maxStock,
    currentStock,
    image,
  } = await req.json();
  const itemSaved = await prisma.item.create({
    data: {
      codeIntern: codeIntern,
      name: name,
      specification: specification,
      equipSectorId: equipSectorId,
      manufacturerId: manufacturerId,
      trayNumber: trayNumber,
      trayLocation: trayLocation,
      minimumStock: minimumStock,
      maxStock: maxStock,
      currentStock: currentStock,
      image: image,
    },
  });
  return NextResponse.json(itemSaved);
}
