import React from "react";
//import Image from "next/image";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function ItemCard() {
  return (
    <>
      <div className="text-black text-lg flex flex-col bg-gray-400 p-4 gap-4 rounded-xl shadow-2xl">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-1">
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              UDC-237
            </div>
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              G
            </div>
          </div>
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            721302261
          </div>
          <div className="flex bg-gray-200 items-center p-2 rounded-lg shadow-lg">
            721/4
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-gray-200 p-2 gap-4 rounded-lg shadow-lg">
            Placa Eletrônica
          </div>
          <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
            Mori Seiki
          </div>
        </div>
        <div className="flex bg-gray-200 p-2 gap-4 rounded-lg shadow-lg">
          Mori Seiki Daikin Main Control Panel for UO163 DAFX2408624...
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-6">
            <div className="flex bg-gray-200 p-2 rounded-lg shadow-lg gap-2">
              6 pçs
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
