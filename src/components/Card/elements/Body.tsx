import { CLOUDINARY_CLOUD, CLOUDINARY_FOLDER, CLOUDINARY_URL } from 'config';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { iActionLink } from '../index';
import Contents from './Contents';
import Markdown from './Markdown';

interface iCardBody {
  align: string;
  padding?: boolean;
}

const StyledCardBody = styled.div<iCardBody>`
  background: var(--color-grey-light);
  background-image: url('${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/${CLOUDINARY_FOLDER}/assets/linen.jpg');
  padding: ${(props) => (props.padding ? `3% 5%` : `0`)};
  position: relative;
  text-align: ${(props) => props.align};

  p {
    word-break: break-word;
  }

  strong {
    color: var(--color-red-dark);
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  table {
    border: 2px solid var(--color-red-dark);
    border-collapse: collapse;
  }

  a:hover {
    color: var(--color-black-0);
  }

  thead {
    background: var(--color-red-dark);
    color: var(--color-white-100);
  }

  thead th {
    padding: 5px;
  }

  td {
    border: 1px solid var(--color-gold-transparent);
    padding: 5px;
  }

  blockquote {
    border-left: 5px solid var(--color-red-intermediate);
    padding-inline-start: 10px;
    background: var(--color-red-40);
  }
`;

const ActionLinks = styled.div`
  border-top: 2px solid var(--color-red-80);
  padding: 5px;
`;

interface iBody {
  padding?: boolean;
  align?: string;
  actionLinks?: Array<iActionLink>;
  markdown?: string;
}
const CardBody: FunctionComponent<iBody> = ({
  children,
  padding,
  align,
  markdown,
  actionLinks,
}) => (
  <StyledCardBody padding={padding} align={align}>
    {children && <Contents>{children}</Contents>}
    {markdown && <Markdown source={markdown} />}
    {actionLinks && (
      <ActionLinks>
        {actionLinks?.map((link) => (
          <Link href={link.href} key={link.title}>
            <a>{link.title}</a>
          </Link>
        ))}
      </ActionLinks>
    )}
  </StyledCardBody>
);

export default CardBody;
