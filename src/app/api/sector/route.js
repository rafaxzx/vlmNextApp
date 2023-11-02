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
