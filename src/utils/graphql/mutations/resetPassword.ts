import gql from "graphql-tag";

export const RESET_PASSWORD_MUTATION_STRING = `mutation RESET_PASSWORD_MUTATION($password: String!, $code: String!) {
    resetPassword(password: $password, passwordConfirmation: $password, code: $code){
      jwt
    }
  }`;

export const RESET_PASSWORD_MUTATION = gql`
  ${RESET_PASSWORD_MUTATION_STRING}
`;
