export interface Article {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  webUrl: string;
}

// Import articles from JSON
import articlesData from './articles.json';
export const articles: Article[] = articlesData.articles;
