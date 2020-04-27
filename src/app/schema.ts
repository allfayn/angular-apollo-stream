import gql from 'graphql-tag';

export const typeDefs = gql`
  directive @client on FIELD

  type State {
    repositoryId: ID
    repositoryName: String
    repositoryOwner: String
  }

  input StateInput {
    repositoryId: ID
    repositoryName: String
    repositoryOwner: String
  }

  extend type Query {
    state: State
  }

  extend type Mutation {
    setState(input: StateInput): State
    resetState: State
  }
`;
