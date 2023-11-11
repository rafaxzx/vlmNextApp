import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchSpecification = params.specification;
  const itemsBySpecification = await prisma.item.findMany({
    where: { specification: { contains: searchSpecification } },
  });
  return NextResponse.json(itemsBySpecification);
}
