import "./globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";

export default function Home() {
  return (
    <ContentArea>
      <div className="text-xl w-full flex flex-col gap-y-4 bg-gray-500 items-center p-4">
        <h1>Insigths de itens registrados no sistema.</h1>
        <h2>Mostrando itens:</h2>
        <ul>
          <li>- mais pesquisados</li>
          <li>- com estoque abaixo do mínimo</li>
          <li>- com estoque zerados</li>
        </ul>
      </div>
    </ContentArea>
  );
}
