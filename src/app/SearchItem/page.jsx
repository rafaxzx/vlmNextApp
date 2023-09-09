import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchItem() {
  return (
    <ContentArea>
      <div className="mb-8 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <div className="flex items-center gap-x-2">
          <h1 className="text-xl">Pesquisar Item por:</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="rounded-lg bg-gray-200 p-2 text-xl text-black"
            placeholder="pesquise aqui"
          />
          <div className="border bg-gray-400 p-2 rounded-lg shadow-lg">
            <FaMagnifyingGlass size={"1.5em"} />
          </div>
        </div>

        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          Nome
        </Link>
        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          Especificação
        </Link>
        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          Fabricante
        </Link>
        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          Setor/Equipamento
        </Link>
        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          Código interno
        </Link>
        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          No estoque mínimo
        </Link>
        <Link
          href={"#"}
          className="bg-gray-100 text-black shadow-lg p-2 rounded-lg"
        >
          Item zerado
        </Link>
      </div>
    </ContentArea>
  );
}
