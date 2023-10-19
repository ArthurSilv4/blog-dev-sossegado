import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/scripts/getAllPosts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="flex flex-col bg-bgLight dark:bg-bgDark">
      <div className="m-auto">
        <h1 className=" text-3xl font-bold underline decoration-1">
          Ultimas Atualizaçôes
        </h1>
      </div>

      <div></div>

      {posts.map((post) => (
        <div key={post.metadata.slug}>
          <Link href={`/blog/${post.metadata.slug}`}>
            <Image
              src={post.metadata.imageUrl}
              height={1000}
              width={1000}
              alt={post.metadata.imageUrl}
            />
          </Link>
          <div>
            <spa>{post.metadata.tag}</spa>
            <Link href={`/blog/${post.metadata.slug}`}>
              {post.metadata.title}
            </Link>
            <p>{post.metadata.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
