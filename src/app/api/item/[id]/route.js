import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const itemId = parseInt(params.id);
  const item = await prisma.item.findFirst({
    where: { id: itemId },
  });
  return NextResponse.json({ item });
}

export async function DEL(req, { params }) {
  const itemId = parseInt(params.id);
  const itemDeleted = await prisma.item.delete({
    where: { id: itemId },
  });
  return NextResponse.json(itemDeleted);
}

export async function PUT(req, { params }) {
  const itemId = parseInt(params.id);
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
  const updatedItem = await prisma.item.update({
    where: { id: itemId },
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
  return NextResponse.json(updatedItem);
}
