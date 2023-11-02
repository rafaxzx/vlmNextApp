import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const manufacturerId = parseInt(params.id);
  const manufacturer = await prisma.manufacturer.findFirst({
    where: { id: manufacturerId },
  });

  return NextResponse.json({
    manufacturer,
  });
}

export async function DEL(req, { params }) {
  const manufacturerId = parseInt(params.id);
  const manufacturerDeleted = await prisma.manufacturer.delete({
    where: { id: manufacturerId },
  });
  return NextResponse.json(manufacturerDeleted);
}

export async function PUT(req, { params }) {
  const manufacturerId = parseInt(params.id);
  const { name, logo } = await req.json();
  const updatedManufacturer = await prisma.manufacturer.update({
    where: { id: manufacturerId },
    data: { name: name, logo: logo },
  });
  return NextResponse.json(updatedManufacturer);
}
