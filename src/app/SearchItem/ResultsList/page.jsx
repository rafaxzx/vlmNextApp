import "../../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import ItemCard from "@/components/ItemCard/ItemCard";

export default function SearchItem() {
  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl lg:text-2xl">Resultado da pesquisa:</h1>
        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>
        <ItemCard itemId={1} />
        <ItemCard itemId={2} />
      </div>
    </ContentArea>
  );
}
