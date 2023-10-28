import React from "react";
//import Image from "next/image";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { prisma } from "@/lib/prisma";

export default async function ItemCard({ manufacturerId, sectorId, itemId }) {
  const manufacturer = await prisma.manufacturer.findFirst({
    where: { id: manufacturerId },
  });
  const sector = await prisma.equipSector.findFirst({
    where: { id: sectorId },
  });
  const item = await prisma.item.findFirst({ where: { id: itemId } });
  return (
    <>
      <div className="text-black text-lg flex flex-col bg-gray-400 p-4 gap-4 rounded-xl shadow-2xl">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-1">
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              UDC-{item.trayNumber}
            </div>
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              {item.trayLocation}
            </div>
          </div>
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            {item.codeIntern}
          </div>
          <div className="flex bg-gray-200 items-center p-2 rounded-lg shadow-lg">
            {sector.name}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-gray-200 p-2 gap-4 rounded-lg shadow-lg">
            {item.name}
          </div>
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            {manufacturer.name}
          </div>
        </div>
        <div className="flex bg-gray-200 p-2 gap-4 rounded-lg shadow-lg">
          {item.specification}
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-6">
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              {item.currentStock} pçs
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
