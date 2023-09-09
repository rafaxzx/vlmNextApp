import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass, FaPenToSquare } from "react-icons/fa6";

export default function Home() {
  return (
    <ContentArea>
      <div className=" w-full flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-2xl">Gerenciar</h1>

        <div>
          <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
            <p className="text-xl ">Item</p>
            <Link href={"/SearchItem"}>
              <FaMagnifyingGlass size={"1.5em"}></FaMagnifyingGlass>
            </Link>
            <Link href={"#"}>
              <FaPenToSquare size={"1.5em"}></FaPenToSquare>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
            <p className="text-xl ">Fabricante</p>
            <Link href={"/#"}>
              <FaMagnifyingGlass size={"1.5em"}></FaMagnifyingGlass>
            </Link>
            <Link href={"#"}>
              <FaPenToSquare size={"1.5em"}></FaPenToSquare>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
            <p className="text-xl ">Setor/Equipamento</p>
            <Link href={"/#"}>
              <FaMagnifyingGlass size={"1.5em"}></FaMagnifyingGlass>
            </Link>
            <Link href={"#"}>
              <FaPenToSquare size={"1.5em"}></FaPenToSquare>
            </Link>
          </div>
        </div>
      </div>
    </ContentArea>
  );
}
