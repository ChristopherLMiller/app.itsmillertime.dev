import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import {
  IoIosArchive,
  IoIosLogIn,
  IoIosLogOut,
  IoMdContact,
} from "react-icons/io";
import { isAdmin } from "src/utils";
import { isAuthenticated, isSessionLoading } from "src/utils/auth";
import styled from "styled-components";

const Item = styled.span`
  color: var(--color-white-100);
  font-size: 4rem;
  cursor: pointer;
`;

const AccountDetails: FunctionComponent = () => {
  const router = useRouter();
  const session = useSession();

  if (isSessionLoading(session)) {
    return null;
  }
  return (
    <div>
      {isAuthenticated(session) && (
        <Item onClick={() => router.push(`/account/my-account`)}>
          <IoMdContact />
        </Item>
      )}
      {isAdmin(session) && (
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
          isAuthenticated(session) ? signOut() : router.push(`/account/login`)
        }
      >
        {isAuthenticated(session) ? <IoIosLogOut /> : <IoIosLogIn />}
      </Item>
    </div>
  );
};

export default AccountDetails;
