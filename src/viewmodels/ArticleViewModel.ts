import {useState, useCallback, useMemo} from 'react';
import {Article} from '../models/Article';

interface ArticleState {
  selectedArticle: Article | null;
  isWebViewVisible: boolean;
  error: string | null;
  isLoading: boolean;
}

export const useArticleViewModel = () => {
  const [state, setState] = useState<ArticleState>({
    selectedArticle: null,
    isWebViewVisible: false,
    error: null,
    isLoading: false,
  });

  const handleSelectArticle = useCallback((article: Article) => {
    if (!article?.id) {
      setState(prev => ({
        ...prev,
        error: 'Invalid article selected',
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      selectedArticle: article,
      error: null,
    }));
  }, []);

  const handleReadMore = useCallback(() => {
    if (!state.selectedArticle?.webUrl) {
      setState(prev => ({
        ...prev,
        error: 'No article URL available',
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      isWebViewVisible: true,
      error: null,
    }));
  }, [state.selectedArticle]);

  const handleCloseWebView = useCallback(() => {
    setState(prev => ({
      ...prev,
      isWebViewVisible: false,
      error: null,
    }));
  }, []);

  const handleClearError = useCallback(() => {
    setState(prev => ({
      ...prev,
      error: null,
    }));
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      handleSelectArticle,
      handleReadMore,
      handleCloseWebView,
      handleClearError,
    }),
    [
      state,
      handleSelectArticle,
      handleReadMore,
      handleCloseWebView,
      handleClearError,
    ],
  );

  return value;
};
