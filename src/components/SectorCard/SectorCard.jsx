import React from "react";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

import { sectorModel } from "@/models/sectorModel";

export default async function SectorCard({ sectorId }) {
  const sectorFromDb = await sectorModel.searchById(sectorId);

  return (
    <>
      <div className="text-black w-96 text-lg items-center flex flex-col bg-gray-400 p-4 gap-4 rounded-xl shadow-2xl">
        <div className="flex gap-2">
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            {sectorFromDb.name}
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <div className="bg-gray-200 p-1 rounded-lg shadow-lg flex items-center">
              <Link href="#">
                <FaPencil size={"1.5em"} className="text-gray-700" />
              </Link>
            </div>
            <div className="bg-gray-200 p-1 rounded-lg shadow-lg flex items-center">
              <Link href="#">
                <FaTrashCan className="text-gray-700" size={"1.5em"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
