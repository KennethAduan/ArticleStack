import {useState} from 'react';
import {Article} from '../models/Article';

export const useArticleViewModel = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleReadMore = () => {
    setIsWebViewVisible(true);
  };

  const handleCloseWebView = () => {
    setIsWebViewVisible(false);
  };

  return {
    selectedArticle,
    isWebViewVisible,
    handleSelectArticle,
    handleReadMore,
    handleCloseWebView,
  };
};
