import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchName = params.name;
  const itemsByName = await prisma.item.findMany({
    where: { name: { contains: searchName } },
  });
  return NextResponse.json(itemsByName);
}
