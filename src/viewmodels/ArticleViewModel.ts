import {useState} from 'react';
import {Article} from '../models/Article';

export const useArticleViewModel = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isArticlePreviewVisible, setIsArticlePreviewVisible] = useState(false);
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  const handleSelectArticle = (article: Article) => {
    if (selectedArticle?.id === article.id) {
      setSelectedArticle(null);
      setIsArticlePreviewVisible(false);
    } else {
      setIsArticlePreviewVisible(true);
      setSelectedArticle(article);
    }
    setIsWebViewVisible(false);
  };

  const handleCloseArticlePreview = () => {
    setIsArticlePreviewVisible(false);
    setSelectedArticle(null);
    setIsWebViewVisible(false);
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
    isArticlePreviewVisible,
    handleCloseArticlePreview,
  };
};
