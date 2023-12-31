"use client";
import "../../globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

export default function SearchManufacturer() {
  let data = { searchOption: "name", inputText: "" };
  const [state, updateState] = useState(data);

  const handleSelectChange = (event) =>
    updateState({ ...state, searchOption: event.target.value });

  const handleInputChange = (event) =>
    updateState({ ...state, inputText: event.target.value });

  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl">Pesquisar Fabricante por:</h1>
        <select
          className="bg-gray-200 text-xl text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4"
          name="searchOptions"
          id="searchOptions"
          onChange={handleSelectChange}
        >
          <option value="name">Nome</option>
        </select>

        <div className="flex items-center gap-x-4">
          <input
            className="rounded-lg bg-gray-200 p-2 text-xl text-black"
            placeholder="pesquise aqui"
            onChange={handleInputChange}
          />
          <Link
            href={{
              pathname: "/manufacturerManager/SearchManufacturer/ResultsList",
              query: state,
            }}
            className="border bg-gray-400 p-2 rounded-lg shadow-lg"
          >
            <FaMagnifyingGlass size={"1.5em"} />
          </Link>
        </div>
        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>
      </div>
    </ContentArea>
  );
}
