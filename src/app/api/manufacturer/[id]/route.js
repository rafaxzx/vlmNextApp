import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  let manufacturerId = parseInt(params.id);
  const manufacturer = await prisma.manufacturer.findFirst({
    where: { id: manufacturerId },
  });

  return NextResponse.json({
    manufacturer,
  });
}
