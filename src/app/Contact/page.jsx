import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Contact() {
  return (
    <ContentArea>
      <div className="py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <h1 className="text-2xl">
          Para entrar em contato para alguma melhoria, sugestão ou outra
          solicitação, envie um email para rafael.daimler@gmail.com com o
          assunto WebApp VLM. Caso estiver na empresa o ramal é 8432.
        </h1>
      </div>
    </ContentArea>
  );
}
