import { LoaderFunctionArgs } from 'react-router-dom';
import { getArticle } from './getArticle';

export const articleLoader = async ({ params }: LoaderFunctionArgs) => {
  const articleId = params.articleId;
  const article = await getArticle(articleId);

  // TODO: Should be proper error or in 'main.tsx'?
  return Promise.resolve(article);
};
