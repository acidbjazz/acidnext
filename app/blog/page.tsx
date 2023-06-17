import Link from "next/link";
import { getArticles } from "@/lib/cms";

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <>
      <h1>Blog</h1>
      {articles.map((article) => {
        return (
          <Link href={`/blog/${article.slug}`} key={article.sys.id}>
            <h2>{article.title}</h2>
          </Link>
        );
      })}
    </>
  );
}
