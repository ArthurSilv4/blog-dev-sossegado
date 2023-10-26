import { Author } from "@/components/author/page";
import { getAllPosts } from "@/scripts/getAllPosts";
import Image from "next/image";
import styles from "./content.module.css";
import { BntBack } from "@/components/buttons/bntBack/page";

export default function postSlug({ params }) {
  const allPosts = getAllPosts();
  const { slug } = params;

  const filteredPost = allPosts.find((post) => post.metadata.slug === slug);

  if (!filteredPost) {
    return (
      <main>
        <h1>Post não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="flex p-2 bg-bgLight dark:bg-bgDark">
      <div className="w-full h-full max-w-[1000px] m-auto">
        <div className="flex flex-col justify-center items-center gap-12 mt-2">
          <h1 className="text-center text-3xl font-bold">
            {filteredPost.metadata.title}
          </h1>
          <Author
            img={filteredPost.metadata.imgAuthor}
            author={filteredPost.metadata.author}
            date={filteredPost.metadata.date}
            link={filteredPost.metadata.linkAuthor}
          />
          <div className="">
            <Image
              src={filteredPost.metadata.imageUrl}
              height={1000}
              width={1000}
              alt={filteredPost.metadata.imageUrl}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="mt-12 mb-12">
          <div
            dangerouslySetInnerHTML={{ __html: filteredPost.content }}
            className={styles.content}
          />
        </div>
        <div className="relative pt-14">
          <div className="absolute bottom-0 right-0 top-[10px]">
            <BntBack />
          </div>
        </div>
      </div>
    </main>
  );
}
