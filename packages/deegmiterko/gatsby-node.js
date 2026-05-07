/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

exports.PAGE_COUNTS = {
  'styloma': 6,
  'artful': 8,
  'generative-design': 14,
  'game-experiments': 12,
  'professional': 8,
  'me': 6,
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  Object.entries(exports.PAGE_COUNTS).forEach(([bookId, pageCount]) => {
    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/render/${bookId}/${i}`,
        component: path.resolve('./src/templates/render-page.tsx'),
        context: { bookId, pageIndex: i },
      });
    }
  });
};
