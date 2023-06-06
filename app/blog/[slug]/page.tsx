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
  return [{ slug: "first-article" }, { slug: "last-article" }];
}

export const dynamicParams = false;
