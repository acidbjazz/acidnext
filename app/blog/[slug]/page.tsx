import { getArticles } from "@/lib/cms";

interface ArticlePage {
  params: {
    slug: string;
  };
}
export default function ArticlePage({ params }: ArticlePage) {
  const { slug } = params;
  return <>Article Page: {slug}</>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;
