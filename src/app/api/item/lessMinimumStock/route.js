import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const itemsLessThenMinimum = await prisma.item.findMany({
    where: {
      currentStock: {
        lt: prisma.item.fields.minimumStock,
      },
    },
  });
  return NextResponse.json(itemsLessThenMinimum);
}
