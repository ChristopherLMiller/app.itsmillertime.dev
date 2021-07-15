import { signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import {
  IoIosLogIn,
  IoIosLogOut,
  IoIosArchive,
  IoMdContact,
} from 'react-icons/io';
import { isAdmin } from 'src/utils';
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
      {session?.user && (
        <Item onClick={() => router.push(`/account/my-account`)}>
          <IoMdContact />
        </Item>
      )}
      {isAdmin(session?.user) && (
        <Item
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin`)
          }
        >
          <IoIosArchive />
        </Item>
      )}
      <Item
        onClick={() =>
          session?.user ? signOut() : router.push(`/account/login`)
        }
      >
        {session?.user && <IoIosLogOut />}
        {!session?.user && <IoIosLogIn />}
      </Item>
    </div>
  );
};

export default AccountDetails;
