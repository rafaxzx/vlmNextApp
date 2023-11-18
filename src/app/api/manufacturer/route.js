import { NextResponse } from "next/server";
import { manufacturerModel } from "@/models/manufacturerModel";

export async function GET(req) {
  const manufacturers = await manufacturerModel.getAllManufacturers();
  return NextResponse.json({
    manufacturers,
  });
}

export async function POST(req) {
  const manufacturerData = await req.json();
  const manufacturerSaved = await manufacturerModel.createManufacturer(
    manufacturerData
  );
  return NextResponse.json(manufacturerSaved);
}
