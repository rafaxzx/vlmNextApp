import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchItem() {
  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl">Pesquisar Item por atributo:</h1>
        <div className="bg-gray-100 text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4">
          Nome
          <input type="radio" id="nome" name="searchType" value={"name"} />
        </div>
        <div className="bg-gray-100 text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4">
          Especificação
          <input
            type="radio"
            id="specification"
            name="searchType"
            value={"especification"}
          />
        </div>
        <div className="bg-gray-100 text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4">
          Fabricante
          <input
            type="radio"
            id="manufacturer"
            name="searchType"
            value={"manufacturer"}
          />
        </div>
        <div className="bg-gray-100 text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4">
          Setor/Equipamento
          <input
            type="radio"
            id="sectorEquipament"
            name="searchType"
            value={"sectorEquip"}
          />
        </div>
        <div className="bg-gray-100 text-black shadow-lg p-2 rounded-lg flex items-center gap-x-4">
          Código interno
          <input
            type="radio"
            id="internCode"
            name="searchType"
            value={"internCode"}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="rounded-lg bg-gray-200 p-2 text-xl text-black"
            placeholder="pesquise aqui"
          />
          <Link
            href="#"
            className="border bg-gray-400 p-2 rounded-lg shadow-lg"
          >
            <FaMagnifyingGlass size={"1.5em"} />
          </Link>
        </div>
        <h1 className="text-xl">Pesquisar Item com estoque:</h1>
        <div className="flex gap-x-4">
          <Link
            href={"#"}
            className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
          >
            Mínimo
          </Link>
          <Link
            href={"#"}
            className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
          >
            Zerado
          </Link>
        </div>
      </div>
    </ContentArea>
  );
}
