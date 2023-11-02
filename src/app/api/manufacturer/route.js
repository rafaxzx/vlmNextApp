import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const manufacturers = await prisma.manufacturer.findMany({
    where: {},
  });

  return NextResponse.json({
    manufacturers,
  });
}
