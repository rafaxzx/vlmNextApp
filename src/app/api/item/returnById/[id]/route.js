import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const itemId = parseInt(params.id);
  const itemReturned = await prisma.item.update({
    where: { id: itemId },
    data: { currentStock: { increment: 1 } },
  });
  return NextResponse.json(itemReturned);
}
