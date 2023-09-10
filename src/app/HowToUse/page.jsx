import "../../app/globals.css";
import Link from "next/link";
import ContentArea from "@/components/ContentArea/ContentArea";
import { FaInfo } from "react-icons/fa6";

export default function HowToUse() {
  return (
    <ContentArea>
      <div className="mb-8 py-8 w-full h-auto flex flex-col gap-y-8 bg-gray-500 items-center p-4 border-b-gray-400 border-2">
        <div className="flex gap-4 pb-3 shadow-lg items-center border-b">
          <div className="border p-4 rounded-full shadow-lg bg-gray-600">
            <FaInfo size={"2em"} />
          </div>
          <h1 className="text-2xl">
            Instruções de como utilizar o WebApp para VLM
          </h1>
        </div>
        <p className="text-justify">
          <strong>Texto fictício.😁</strong> Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Excepturi minima voluptatum
          exercitationem cumque dolorem quos, aut ipsam iure, temporibus ipsum
          earum at? In illo natus, quo sed eius fugiat voluptatibus, cum maiores
          reprehenderit consequuntur placeat? Nobis enim pariatur iste incidunt
          necessitatibus maiores qui, explicabo tempore aliquam blanditiis
          laboriosam molestias? Autem nemo, nihil aut nam distinctio, nisi in
          quis labore, quo tempore inventore! Quam, minus at dolores quisquam
          corrupti molestiae repellat alias ad nemo reprehenderit voluptatibus
          culpa error laudantium cupiditate, praesentium non facilis eveniet
          excepturi dolorum. Eos fuga minima laudantium eaque veritatis esse ex
          doloremque odio itaque quasi ipsam eum, sed voluptatum? Aperiam
          quibusdam in sint ad natus, est voluptatem accusantium. Voluptatum
          tempora, voluptatem impedit ratione recusandae molestiae, quos rem
          doloremque, dolores fuga ipsam cum nulla eius nisi. Ducimus qui
          explicabo unde voluptas! Consequatur aliquid beatae perspiciatis quis
          illo reprehenderit, quod inventore sequi sapiente deleniti voluptatem
          officia, omnis, cum quibusdam quidem hic esse? Nostrum eligendi quo
          explicabo architecto molestiae nisi rerum recusandae ipsa natus
          dolores, quod ratione rem delectus ipsum debitis quaerat quos quidem?
          Molestiae soluta omnis distinctio labore natus quas ipsum fugit cumque
          modi aut dolor totam architecto laboriosam sit illo ad itaque iusto
          similique odit non nisi ullam, sapiente magni error. Doloremque
          voluptas, sequi, repellat eligendi pariatur exercitationem illum natus
          necessitatibus voluptatibus, placeat maiores iste. Veniam voluptatem
          id praesentium molestiae dicta aliquid tempora facere beatae?
          Doloremque ut soluta ex vitae modi cumque expedita accusantium,
          repellat quasi consectetur quibusdam, nemo, quis repellendus iusto
          perspiciatis magnam delectus a! Debitis, omnis sequi.
        </p>
      </div>
    </ContentArea>
  );
}
