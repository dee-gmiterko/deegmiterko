import path from 'path';
import { pageCounts } from './constants.mjs';

export const createPages = async ({ actions }) => {
  const { createPage } = actions;

  Object.entries(pageCounts).forEach(([bookId, pageCount]) => {
    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/render/${bookId}/${i}`,
        component: path.resolve('./src/templates/render-page.tsx'),
        context: { bookId, pageIndex: i },
      });
    }
  });
};
