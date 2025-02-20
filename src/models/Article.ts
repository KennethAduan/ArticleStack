export interface Article {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  webUrl: string;
  content: string;
  publishDate: string;
}

// Import articles from JSON
import articlesData from './articles.json';
export const articles: Article[] = articlesData.articles;
