/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');
const { pageCounts } = require('./constants.js');

exports.createPages = async ({ actions }) => {
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
