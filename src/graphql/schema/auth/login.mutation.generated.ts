import * as Types from 'src/graphql/types';

import { useMutation, UseMutationOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type LoginMutationVariables = Types.Exact<{
  identifier: Types.Scalars[`String`];
  password: Types.Scalars[`String`];
}>;

export type LoginMutation = { __typename?: `Mutation` } & {
  login: { __typename?: `UsersPermissionsLoginPayload` } & Pick<
    Types.UsersPermissionsLoginPayload,
    `jwt`
  > & {
      user: { __typename?: `UsersPermissionsMe` } & Pick<
        Types.UsersPermissionsMe,
        `id` | `username` | `email` | `confirmed` | `blocked`
      > & {
          role?: Types.Maybe<
            { __typename?: `UsersPermissionsMeRole` } & Pick<
              Types.UsersPermissionsMeRole,
              `id` | `name` | `description` | `type`
            >
          >;
        };
    };
};

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
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables
      )(),
    options
  );
