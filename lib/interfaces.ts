export interface Article {
  sys: { id: string };
  title: string;
  slug: string;
  cover: { url: string };
  body: string;
}
