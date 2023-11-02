import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let nameReq = params.name;
  const manufacturerByName = await prisma.manufacturer.findMany({
    where: { name: { contains: nameReq } },
  });
  return NextResponse.json(manufacturerByName);
}
