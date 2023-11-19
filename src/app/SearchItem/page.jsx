"use client";
import "../../app/globals.css";
import { useState } from "react";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchItem() {
  let data = { searchOption: "name", inputText: "" };
  const [state, updateState] = useState(data);

  const handleSelectChange = function (e) {
    updateState({ ...state, searchOption: e.target.value });
    console.log(`Field ${e.target.value} selected`);
  };
  const handleInputChange = function (e) {
    updateState({ ...state, inputText: e.target.value });
    console.log(`Text ${e.target.value} inputed`);
  };

  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl lg:text-2xl">Pesquisar Item por:</h1>
        <select
          className="bg-gray-200 text-xl text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4"
          name="searchOptions"
          id="searchOptions"
          onChange={handleSelectChange}
        >
          <option value="name">Nome</option>
          <option value="specification">Especificação</option>
          <option value="manufacturer">Fabricante</option>
          <option value="internCode">Código Interno</option>
          <option value="sectorEquipament">Setor/Equipamento</option>
        </select>

        <div className="flex items-center gap-x-4">
          <input
            onChange={handleInputChange}
            className="rounded-lg bg-gray-200 p-2 text-xl text-black"
            placeholder="pesquise aqui"
          />
          <Link
            href={{ pathname: "/SearchItem/ResultsList", query: state }}
            className="border bg-gray-400 p-2 rounded-lg shadow-lg"
          >
            <FaMagnifyingGlass size={"1.5em"} />
          </Link>
        </div>

        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>

        <h1 className="text-xl lg:text-2xl">Listar Itens com estoque:</h1>
        <div className="flex gap-x-4">
          <Link
            href={{
              pathname: "/SearchItem/ResultsList",
              query: { searchOption: "lessMinimumStock", inputText: "" },
            }}
            className="bg-gray-100 text-black shadow-lg p-2 rounded-lg text-xl lg:text-2xl"
          >
            Mínimo
          </Link>
          <Link
            href={{
              pathname: "/SearchItem/ResultsList",
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
