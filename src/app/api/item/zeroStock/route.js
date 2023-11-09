import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const allItems = await prisma.item.findMany({
    where: { currentStock: 0 },
  });
  return NextResponse.json(allItems);
}
