import {createContext, ReactNode, useContext} from 'react';
import {useArticleViewModel} from '../viewmodels/ArticleViewModel';

const ArticleContext = createContext<ReturnType<
  typeof useArticleViewModel
> | null>(null);

export const ArticleProvider = ({children}: {children: ReactNode}) => {
  const articleViewModel = useArticleViewModel();

  return (
    <ArticleContext.Provider value={articleViewModel}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticle must be used within an ArticleProvider');
  }
  return context;
};
