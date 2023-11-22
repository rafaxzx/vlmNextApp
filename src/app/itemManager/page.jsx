"use client";
import "../globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import ButtonBase from "@/components/ButtomBase/ButtomBase";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function ItemManager() {
  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl lg:text-2xl">Gerenciar Items:</h1>
        <ButtonBase
          route={"/itemManager/itemDetail"}
          text={"Cadastrar itens"}
          Icon={FaPlus}
        ></ButtonBase>
        <ButtonBase
          route={"/itemManager/SearchItem"}
          text={"Pesquisar itens"}
          Icon={FaMagnifyingGlass}
        ></ButtonBase>

        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>

        <h1 className="text-xl lg:text-2xl">Listar Itens com estoque:</h1>
        <div className="flex gap-x-4">
          <Link
            href={{
              pathname: "/itemManager/SearchItem/ResultsList",
              query: { searchOption: "lessMinimumStock", inputText: "" },
            }}
            className="bg-gray-100 text-black shadow-lg p-2 rounded-lg text-xl lg:text-2xl"
          >
            Mínimo
          </Link>
          <Link
            href={{
              pathname: "/itemManager/SearchItem/ResultsList",
              query: { searchOption: "zeroStock", inputText: "" },
            }}
            className="bg-gray-100 text-black shadow-lg p-2 rounded-lg text-xl lg:text-2xl"
          >
            Zerado
          </Link>
        </div>
        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>
      </div>
    </ContentArea>
  );
}
