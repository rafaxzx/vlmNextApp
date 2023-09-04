import Link from "next/link";
import "../../app/globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";

export default function Home() {
  return (
    <ContentArea>
      <div className=" w-full flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <p>Pesquisar</p>
        <Link
          href={"#"}
          className="bg-slate-300 text-black shadow-lg p-2 rounded-lg"
        >
          Itens
        </Link>
        <Link
          href={"#"}
          className="bg-slate-300 text-black shadow-lg p-2 rounded-lg"
        >
          Fabricantes
        </Link>
        <Link
          href={"#"}
          className="bg-slate-300 text-black shadow-lg p-2 rounded-lg"
        >
          Setores/Equipamentos
        </Link>
      </div>
      <div className=" w-full flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <p>Cadastrar - Editar</p>
        <Link
          href={"#"}
          className="bg-slate-300 text-black shadow-lg p-2 rounded-lg"
        >
          Itens
        </Link>
        <Link
          href={"#"}
          className="bg-slate-300 text-black shadow-lg p-2 rounded-lg"
        >
          Fabricantes
        </Link>
        <Link
          href={"#"}
          className="bg-slate-300 text-black shadow-lg p-2 rounded-lg"
        >
          Setores/Equipamentos
        </Link>
      </div>
    </ContentArea>
  );
}
