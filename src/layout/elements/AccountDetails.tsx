import { signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdAccountBox } from 'react-icons/md';
import styled from 'styled-components';

const Item = styled.span`
  color: var(--color-white-100);
  font-size: 4rem;
  cursor: pointer;
`;

const AccountDetails: FunctionComponent = () => {
  const router = useRouter();
  const [session] = useSession();

  return (
    <div>
      <Item
        onClick={() =>
          session?.user ? signOut() : router.push(`/account/login`)
        }
      >
        <IoPersonCircleOutline />
      </Item>
      {session?.user && (
        <Item onClick={() => router.push(`/account/my-account`)}>
          <MdAccountBox />
        </Item>
      )}
    </div>
  );
};

export default AccountDetails;
