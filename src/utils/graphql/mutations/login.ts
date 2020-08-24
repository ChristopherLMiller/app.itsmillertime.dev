import gql from "graphql-tag";

export const LOGIN_MUTATION_STRING = `mutation LOGIN_MUTATION($identifier:String!,$password:String!) {
    login(input: {identifier: $identifier, password:$password}) {
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
  }`;

export const LOGIN_MUTATION = gql`
  ${LOGIN_MUTATION_STRING}
`;
