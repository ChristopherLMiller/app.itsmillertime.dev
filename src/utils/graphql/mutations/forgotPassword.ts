import gql from "graphql-tag";

export const FORGOT_PASSWORD_MUTATION_STRING = `
mutation FORGOT_PASSWORD ($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
  `;

export const FORGOT_PASSWORD_MUTATION = gql`
  ${FORGOT_PASSWORD_MUTATION_STRING}
`;
