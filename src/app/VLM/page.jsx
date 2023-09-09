import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass, FaPenToSquare } from "react-icons/fa6";

export default function Home() {
  return (
    <ContentArea>
      <div className="py-8 w-full flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-2xl">Gerenciar</h1>

        <div>
          <Link href={"/SearchItem"}>
            <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
              <p className="text-xl ">Item</p>
              <FaMagnifyingGlass size={"1.5em"}></FaMagnifyingGlass>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/#"}>
            <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
              <p className="text-xl ">Fabricante</p>
              <FaMagnifyingGlass size={"1.5em"}></FaMagnifyingGlass>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/#"}>
            <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
              <p className="text-xl ">Setor/Equipamento</p>
              <FaMagnifyingGlass size={"1.5em"}></FaMagnifyingGlass>
            </div>
          </Link>
        </div>
      </div>
    </ContentArea>
  );
}
