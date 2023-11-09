import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchInternCode = params.internCode;
  const itemsByInterCode = await prisma.item.findMany({
    where: { name: { contains: searchInternCode } },
  });
  return NextResponse.json(itemsByInterCode);
}
