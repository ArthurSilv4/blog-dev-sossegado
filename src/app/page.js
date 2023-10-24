import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/scripts/getAllPosts";
import { Author } from "@/components/author/page";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen p-2 flex flex-col bg-bgLight dark:bg-bgDark">
      <div className="w-full h-full max-w-[1500px] m-auto flex flex-col">
        <div className="m-auto mb-20">
          <h1 className="text-2xl font-bold underline decoration-1 sm:text-3xl">
            Ultimas Atualizaçôes
          </h1>
        </div>

        <div className="flex gap-10 overflow-x-auto touch-pan-x">
          {posts.map((post) => (
            <div key={post.metadata.slug} className="flex gap-10 pb-10">
              <div className="max-w-[300px] ">
                <Link href={`/blog/${post.metadata.slug}`}>
                  <Image
                    src={post.metadata.imageUrl}
                    height={1000}
                    width={1000}
                    alt={post.metadata.imageUrl}
                  />
                </Link>
                <div className="flex flex-col gap-2">
                  <span className="mt-2 text-orange font-bold underline">
                    {post.metadata.tag}
                  </span>
                  <Link
                    href={`/blog/${post.metadata.slug}`}
                    className="uppercase text-3xl font-bold font-serif"
                  >
                    {post.metadata.title}
                  </Link>
                  <p className="text-justify">{post.metadata.description}</p>
                  <Author
                    img={post.metadata.imgAuthor}
                    author={post.metadata.author}
                    date={post.metadata.date}
                    link={post.metadata.linkAuthor}
                  />
                </div>
              </div>

              <div className="h-full w-[1px] bg-orange m-auto" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
