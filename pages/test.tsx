import { NextPage } from 'next';
import redirectIfProd from 'src/utils/functions/redirectIfProd';
import TestPageMarkdown from 'data/mdx/test.mdx';

const TestPage: NextPage = () => <TestPageMarkdown />;

TestPage.getInitialProps = async ({ res }) => {
  redirectIfProd(res);

  return {};
};

export default TestPage;
