"use client";
import "../globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";
import ButtonBase from "@/components/ButtomBase/ButtomBase";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function ManufacturerManager() {
  return (
    <ContentArea>
      <div className="mb-12 py-8 w-full flex flex-col justify-center gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-xl lg:text-2xl">Gerenciar Fabricantes:</h1>
        <ButtonBase
          route={"/manufacturerManager/manufacturerDetail"}
          text={"Cadastrar fabricantes"}
          Icon={FaPlus}
        ></ButtonBase>
        <ButtonBase
          route={"/manufacturerManager/SearchManufacturer"}
          text={"Pesquisar fabricantes"}
          Icon={FaMagnifyingGlass}
        ></ButtonBase>
        <hr className="w-80 lg:w-96 bg-gray-400 border-0 h-px"></hr>
      </div>
    </ContentArea>
  );
}
