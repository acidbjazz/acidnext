import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/lib/cms";

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <>
      <h1>Blog</h1>
      {articles.map((article) => {
        return (
          <Link href={`/blog/${article.slug}`} key={article.sys.id}>
            <Image src={article.cover.url} width={300} height={200} alt={article.title} />
            <h2>{article.title}</h2>
          </Link>
        );
      })}
    </>
  );
}

export const metadata: Metadata = {
  title: "Blog",
};
