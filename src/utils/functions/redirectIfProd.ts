import { ServerResponse } from 'http';

const redirectIfProd = (res: ServerResponse): void => {
  if (process.env.NODE_ENV === `production`) {
    res.writeHead(302, {
      Location: `/`,
      'Content-Type': `text/html; chaset=utf-8`,
    });
    res.end();
    return;
  }
};

export default redirectIfProd;
