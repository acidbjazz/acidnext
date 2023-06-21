import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getArticle, getArticles } from "@/lib/cms";

interface ArticlePage {
  params: {
    slug: string;
  };
}
export default async function ArticlePage({ params }: ArticlePage) {
  const { slug } = params;
  const article = await getArticle(slug);
  return (
    <>
      <h1>{article.title}</h1>
      <Image src={article.cover.url} width={800} height={600} alt={article.title} />
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </>
  );
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ArticlePage): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticle(slug);
  return {
    title: article.title,
    openGraph: {
      images: article.cover.url,
    },
  };
}
