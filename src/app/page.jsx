import "./globals.css";
import ContentArea from "@/components/ContentArea/ContentArea";

export default function Home() {
  return (
    <ContentArea>
      <div className=" w-full flex flex-col gap-y-4 bg-gray-600 items-center p-4">
        <p>Conteúdo HOME</p>
      </div>
    </ContentArea>
  );
}
