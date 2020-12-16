import { NextPage } from 'next';
import redirectIfProd from 'src/utils/functions/redirectIfProd';

const TestPageMarkdown = require('data/mdx/test.mdx').default;

const TestPage: NextPage = () => {
  return <TestPageMarkdown />;
};

TestPage.getInitialProps = async ({ res }) => {
  redirectIfProd(res);

  return {};
};

export default TestPage;
