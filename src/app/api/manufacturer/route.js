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

export async function POST(req) {
  const { name, logo } = await req.json();
  const manufacturerSaved = await prisma.manufacturer.create({
    data: { name: name, logo: logo },
  });
  return NextResponse.json(manufacturerSaved);
}
