import Link from "next/link";
import { SiMercedes } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="w-full
      h-16
      fixed
      bottom-0
      border-t
    bg-gray-600
    flex justify-center
    items-center
    p-2
    gap-2
    gap-x-4
    mx-auto
    text-sm
    md:text-lg"
    >
      <Link href={"/Contact"} className="border rounded p-2 hover:bg-gray-800">
        Contato
      </Link>
      <Link href={"/Manut721"} className="border rounded p-2 hover:bg-gray-800">
        <div className="flex items-center gap-x-2">
          Manut 721
          <SiMercedes size={"1.5em"}></SiMercedes>
        </div>
      </Link>
    </footer>
  );
}
