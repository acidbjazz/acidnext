interface ArticlePage {
  params: {
    slug: string;
  };
}
export default function ArticlePage({ params }: ArticlePage) {
  const { slug } = params;
  return <>Article Page: {slug}</>;
}
