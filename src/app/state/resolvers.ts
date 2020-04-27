import {
  GetStateDocument,
  Resolvers,
  State,
  StateInput,
} from '../types-generated';

export const initialState: State = {
  __typename: 'State',
  repositoryId: null,
  repositoryName: null,
  repositoryOwner: null,
};

export const stateResolvers: Resolvers = {
  Query: {
    state(_, vars, { cache }) {
      return cache.readQuery({
        query: GetStateDocument,
      });
    },
  },
  Mutation: {
    setState: (root, data: { input: StateInput }, { cache }) => {
      const result = cache.readQuery({
        query: GetStateDocument,
      });
      console.log(result, data);
      cache.writeQuery({
        query: GetStateDocument,
        data: { state: { ...result.state, ...data.input } },
      });
      return { ...result.state, ...data.input };
    },
  },
};
