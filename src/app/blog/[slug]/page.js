import { getAllPosts } from "@/scripts/getAllPosts";

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
    <main>
      <span>{filteredPost.metadata.date}</span>
      <div dangerouslySetInnerHTML={{ __html: filteredPost.content }} />
    </main>
  );
}
