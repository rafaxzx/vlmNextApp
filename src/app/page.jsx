import "./globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";

export default function Home() {
  return (
    <ContentArea>
      <div className="py-8 h-full text-xl w-full flex flex-col gap-y-4 bg-gray-500 items-center p-0">
        <h1>🚧Em desenvolvimento...🚧</h1>
        <h1>Insigths de itens registrados no sistema.</h1>
        <ul>
          <li>- mais pesquisados</li>
          <li>- com estoque abaixo do mínimo</li>
          <li>- com estoque zerados</li>
        </ul>
      </div>
    </ContentArea>
  );
}
