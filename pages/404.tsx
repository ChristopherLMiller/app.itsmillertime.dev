import Error from 'next/error';
import { FunctionComponent } from 'react';

const NotFoundPage: FunctionComponent = () => <Error statusCode={404} />;

export default NotFoundPage;
