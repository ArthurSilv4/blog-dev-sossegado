import Image from "next/image";
import Link from "next/link";

export function BntBack() {
  return (
    <Link href={"#"}>
      <div className="rounded-md bg-gradient-to-b from-orange to-blue p-1">
        <div className="w-full rounded bg-bgLight dark:bg-bgDark p-1 flex gap-2">
          <span className="font-bold">Voltar Para o Topo</span>
          <Image
            src={"/icons/backTop.svg"}
            width={20}
            height={20}
            alt="Back to top"
            className="dark:invert-[70%] dark:sepia-[0%] dark:saturate-[1200%] dark:hue-rotate-[190deg]"
          />
        </div>
      </div>
    </Link>
  );
}
