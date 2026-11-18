import path from 'path';
import { pageCounts } from './constants.mjs';

export const createPages = async ({ actions }) => {
  const { createPage } = actions;

  Object.keys(pageCounts).forEach((bookId) => {
    createPage({
      path: `/${bookId}/`,
      component: path.resolve('./src/templates/book-page.tsx'),
      context: { bookId, thumbnailRegex: `/^${bookId}-\\d+$/` },
    });
  });

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
