import "./globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";

export default function Home() {
  return (
    <ContentArea>
      <div className="w-screen h-full text-xl  flex flex-col gap-y-4 bg-gray-500 items-center p-0">
        <div className="w-4/5 py-8 h-full text-xl lg:text-2xl flex flex-col gap-y-4 bg-gray-500 items-center p-0">
          <h1>🚧Em desenvolvimento...🚧</h1>
          <h1>
            Nessa página de início a ideia será mostrar Insigths de itens
            registrados no sistema.
          </h1>
          <ul>
            <li>- Top 5 mais pesquisados</li>
            <li>- Top 5 pesquisados recentemente</li>
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
