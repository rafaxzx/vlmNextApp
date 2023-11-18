import { NextResponse } from "next/server";
import { manufacturerModel } from "@/models/manufacturerModel";

export async function GET(req, { params }) {
  const manufacturerId = parseInt(params.id);
  const manufacturer = await manufacturerModel.searchById(manufacturerId);
  return NextResponse.json({
    manufacturer,
  });
}

export async function DEL(req, { params }) {
  const manufacturerId = parseInt(params.id);
  const manufacturerDeleted = await manufacturerModel.deleteById(
    manufacturerId
  );
  return NextResponse.json(manufacturerDeleted);
}

export async function PUT(req, { params }) {
  const manufacturerId = parseInt(params.id);
  const manufacturerData = await req.json();
  const updatedManufacturer = await manufacturerModel.updateById(
    manufacturerId,
    manufacturerData
  );
  return NextResponse.json(updatedManufacturer);
}
