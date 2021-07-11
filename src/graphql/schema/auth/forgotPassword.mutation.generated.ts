import * as Types from 'src/graphql/types';

import { useMutation, UseMutationOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ForgotPasswordMutationVariables = Types.Exact<{
  email: Types.Scalars[`String`];
}>;

export type ForgotPasswordMutation = { __typename?: `Mutation` } & {
  forgotPassword?: Types.Maybe<
    { __typename?: `UserPermissionsPasswordPayload` } & Pick<
      Types.UserPermissionsPasswordPayload,
      `ok`
    >
  >;
};

export const ForgotPasswordDocument = `
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export const useForgotPasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ForgotPasswordMutation,
    TError,
    ForgotPasswordMutationVariables,
    TContext
  >
) =>
  useMutation<
    ForgotPasswordMutation,
    TError,
    ForgotPasswordMutationVariables,
    TContext
  >(
    (variables?: ForgotPasswordMutationVariables) =>
      fetcher<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
        ForgotPasswordDocument,
        variables
      )(),
    options
  );
