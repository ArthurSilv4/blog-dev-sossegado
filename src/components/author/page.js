import Image from "next/image";
import Link from "next/link";

export function Author({ img, author, date, link }) {
  return (
    <div className="flex gap-2">
      <div className="rounded-xl h-16">
        <Link href={link}>
          <Image
            src={img}
            height={300}
            width={300}
            alt="Autor do post"
            className="h-full w-full rounded-xl"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <Link href={link} className="uppercase font-bold">
          {author}
        </Link>
        <span>{date}</span>
      </div>
    </div>
  );
}
