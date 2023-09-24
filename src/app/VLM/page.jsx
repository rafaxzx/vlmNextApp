import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { SiMercedes } from "react-icons/si";
import { MdPrecisionManufacturing, MdLocationPin } from "react-icons/md";

export default function Home() {
  return (
    <ContentArea>
      <div className="py-8 w-full flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-2xl">Gerenciar</h1>

        <div>
          <Link href={"/SearchItem"}>
            <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
              <p className="text-xl ">Itens</p>
              <SiMercedes size={"1.5em"}></SiMercedes>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/SearchManufacturer"}>
            <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
              <p className="text-xl ">Fabricantes</p>
              <MdPrecisionManufacturing
                size={"1.5em"}
              ></MdPrecisionManufacturing>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/SearchSectorEquipament"}>
            <div className="flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
              <p className="text-xl ">Setores/Equipamentos</p>
              <MdLocationPin size={"1.5em"}></MdLocationPin>
            </div>
          </Link>
        </div>
      </div>
    </ContentArea>
  );
}
