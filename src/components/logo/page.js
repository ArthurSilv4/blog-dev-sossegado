import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <div className="rounded-full h-16 w-16 bg-gradient-to-b from-orange to-blue flex">
          <div className="rounded-full h-14 w-14 bg-bgLight dark:bg-bgDark m-auto flex">
            <span className="text-5xl font-bold m-auto">B</span>
          </div>
        </div>

        <span className="text-4xl font-bold text-orange">BLOG</span>
      </div>
    </Link>
  );
}
