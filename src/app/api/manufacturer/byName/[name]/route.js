import { manufacturerModel } from "@/models/manufacturerModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const nameReq = params.name;
  const manufacturerByName = await manufacturerModel.searchByName(nameReq);
  return NextResponse.json(manufacturerByName);
}
