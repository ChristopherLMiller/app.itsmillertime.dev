/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UseMutationOptions, useMutation } from 'react-query';
import { fetcher } from 'src/utils/functions/fetch';
import { Exact, Scalars, Maybe } from '../types';
import { UserPermissionsPasswordPayload } from '../types/UsersPermissions';

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars[`String`];
}>;

export type ForgotPasswordMutation = { __typename?: `Mutation` } & {
  forgotPassword?: Maybe<
    { __typename?: `UserPermissionsPasswordPayload` } & Pick<
      UserPermissionsPasswordPayload,
      `ok`
    >
  >;
};

export const ForgotPasswordDocument = `
    mutation FORGOT_PASSWORD($email: String!) {
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
