import "./globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";
import ButtonBase from "@/components/ButtomBase/ButtomBase";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home() {
  return (
    <ContentArea>
      <div className="w-screen h-full text-xl  flex flex-col gap-y-4 bg-gray-500 items-center p-0">
        <div className="w-4/5 py-8 h-full text-xl lg:text-2xl flex flex-col gap-y-4 bg-gray-500 items-center p-0">
          <h1>🚧Em desenvolvimento...🚧</h1>
          <h1>Atalho para algumas funções do Sistema</h1>
          <ul className="flex flex-col gap-6">
            <ButtonBase
              route="/SearchItem"
              text="Procurar por um Item"
              Icon={FaMagnifyingGlass}
            ></ButtonBase>
            <ButtonBase
              route="/SearchManufacturer"
              text="Procurar por um Fabricante"
              Icon={FaMagnifyingGlass}
            ></ButtonBase>
            <ButtonBase
              route="/SearchSectorEquipament"
              text="Procurar por um Setor"
              Icon={FaMagnifyingGlass}
            ></ButtonBase>
            <li>- Quantidade com estoque abaixo do mínimo</li>
            <li>- Quantidade com estoque zerados</li>
          </ul>
          <h1>
            Até o momento, algumas páginas foram criadas porém ainda sem as
            funções estarem ativas pois ainda falta a etapa de criação do
            servidor e do banco de dados. Após a criação do servidor, será
            necessário fazer as funcionalidades que irão trazer o dinamismo nas
            telas.
          </h1>
        </div>
      </div>
    </ContentArea>
  );
}
