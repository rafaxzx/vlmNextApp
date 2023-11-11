import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const itemId = parseInt(params.id);
  const itemConsumed = await prisma.item.update({
    where: { id: itemId },
    data: { currentStock: { decrement: 1 } },
  });
  return NextResponse.json(itemConsumed);
}
