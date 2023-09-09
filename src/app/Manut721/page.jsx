import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Manut721() {
  return (
    <ContentArea>
      <div className="py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-2xl">
          A Manut721 é a área de manutenção responsável pelo prédio de
          fabricação de eixos.
        </h1>
      </div>
    </ContentArea>
  );
}
