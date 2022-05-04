import * as Types from '../../types';

import { useMutation, UseMutationOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type LoginMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type LoginMutation = { login: { jwt?: string | null, user: { id: string, username: string, email: string, confirmed?: boolean | null, blocked?: boolean | null, role?: { id: string, name: string, description?: string | null, type?: string | null } | null } } };


export const LoginDocument = `
    mutation Login($identifier: String!, $password: String!) {
  login(input: {identifier: $identifier, password: $password}) {
    jwt
    user {
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
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );