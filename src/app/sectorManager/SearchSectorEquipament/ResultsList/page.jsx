import "../../../globals.css";
import { sectorModel } from "@/models/sectorModel";
import ContentArea from "@/components/ContentArea/ContentArea";
import SectorCard from "@/components/SectorCard/SectorCard";

export default async function ResultsPage({ searchParams }) {
  const searchOptionsToUse = searchParams.searchOption;
  const inputedTextToUse = searchParams.inputText;
  let sectors = [];
  switch (searchOptionsToUse) {
    case "name":
      sectors = await sectorModel.searchBySectorName(inputedTextToUse);
      break;
    default:
      break;
  }

  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl lg:text-2xl">
          Resultado da pesquisa: {sectors.length}{" "}
          {sectors.length > 1 ? "fabricantes" : "fabricante"}
        </h1>
        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>
        {sectors.map((element) => (
          <SectorCard
            key={element.id + "-" + element.name}
            sectorFromDb={element}
          />
        ))}
      </div>
    </ContentArea>
  );
}
