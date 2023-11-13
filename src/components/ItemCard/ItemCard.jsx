import React from "react";
//import Image from "next/image";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { item } from "@/models/item";
import { sector } from "@/models/sector";
import { manufacturer } from "@/models/manufacturer";

export default async function ItemCard({ itemId }) {
  const itemFromDb = await item.searchById(itemId);
  const manufacturerFromDb = await manufacturer.searchById(
    itemFromDb.manufacturerId
  );
  const sectorFromDb = await sector.searchById(itemFromDb.equipSectorId);
  return (
    <>
      <div className="text-black w-96 text-lg flex flex-col bg-gray-400 p-4 gap-4 rounded-xl shadow-2xl">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-1">
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              UDC-{itemFromDb.trayNumber}
            </div>
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              {itemFromDb.trayLocation}
            </div>
          </div>
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            {itemFromDb.codeIntern}
          </div>
          <div className="flex bg-gray-200 items-center p-2 rounded-lg shadow-lg">
            {sectorFromDb.name}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-gray-200 p-2 gap-4 rounded-lg shadow-lg">
            {itemFromDb.name}
          </div>
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            {manufacturerFromDb.name}
          </div>
        </div>
        <div className="flex bg-gray-200 p-2 gap-4 rounded-lg shadow-lg">
          {itemFromDb.specification}
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-6">
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              {itemFromDb.currentStock} pçs
            </div>
            <div className="flex gap-2">
              <div className="bg-gray-200 p-1 rounded-lg shadow-lg flex items-center">
                <Link href="#">
                  <FaPlus size={"1.5em"} className="text-gray-700" />
                </Link>
              </div>
              <div className="bg-gray-200 p-1 rounded-lg shadow-lg flex items-center">
                <Link href="#">
                  <FaMinus size={"1.5em"} className="text-gray-700" />
                </Link>
              </div>
            </div>
          </div>
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
