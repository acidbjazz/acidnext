import { Article } from "./interfaces";

const API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const API_AUTH = `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`;

async function graphqlClient(query: string): Promise<any> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: API_AUTH,
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
}

export async function getArticles(): Promise<Article[]> {
  const query = `{
    articleCollection {
      items {
        sys { id }
        title
        slug
        cover { url }
        body
      }
    }
  }`;
  const { data } = await graphqlClient(query);
  return data.articleCollection.items;
}

export async function getArticle(slug: string): Promise<Article> {
  const query = `{
    articleCollection(where: {slug: "${slug}"}) {
      items {
        title
        cover { url }
        body
      }
    }
  }`;
  const { data } = await graphqlClient(query);
  return data.articleCollection.items[0];
}
