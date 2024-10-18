import { ReactElement } from 'react';
import { RogueLog1 } from './RogueLog1';
import { RogueLog2 } from './RogueLog2';

const articles: Map<string, ReactElement> = new Map([
  ['RogueLog1', RogueLog1()],
  ['RogueLog2', RogueLog2()],
]);

// TODO: Should this be a custom hook? Like useGetArticle?
// and should articleLoader also live here?
export const getArticle = (articleId: string | undefined) => {
  return articleId ? articles.get(articleId) : '';
};
