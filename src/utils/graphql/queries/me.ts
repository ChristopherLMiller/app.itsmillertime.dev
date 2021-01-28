import gql from 'graphql-tag';
import { iRole } from '../types/role';

export interface iMe {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: iRole;
}

export const ME_QUERY_STRING = `
query ME {
    me {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
`;

export const ME_QUERY = gql`
  ${ME_QUERY_STRING}
`;
