import "../../../globals.css";
import { itemModel } from "@/models/itemModel";
import ContentArea from "@/components/ContentArea/ContentArea";
import ItemCard from "@/components/ItemCard/ItemCard";

export default async function ResultsPage({ searchParams }) {
  const searchOptionsToUse = searchParams.searchOption;
  const inputedTextToUse = searchParams.inputText;
  let items = [];
  switch (searchOptionsToUse) {
    case "name":
      items = await itemModel.searchByName(inputedTextToUse);
      break;
    case "specification":
      items = await itemModel.searchBySpecification(inputedTextToUse);
      break;
    case "manufacturer":
      items = await itemModel.searchByManufacturerName(inputedTextToUse);
      break;
    case "internCode":
      items = await itemModel.searchByInternCode(inputedTextToUse);
      break;
    case "sectorEquipament":
      items = await itemModel.searchBySectorName(inputedTextToUse);
      break;
    case "lessMinimumStock":
      items = await itemModel.lessMinimumStock();
      break;
    case "zeroStock":
      items = await itemModel.zeroStock();
      break;
    default:
      break;
  }

  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl lg:text-2xl">
          Resultado da pesquisa: {items.length}{" "}
          {items.length > 1 ? "items" : "item"}
        </h1>
        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>
        {items.map((element) => (
          <ItemCard key={element.codeIntern} itemFromDb={element} />
        ))}
      </div>
    </ContentArea>
  );
}
