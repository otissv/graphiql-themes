import graphiql, { GRAPHIQL_INITIAL_STATE } from './graphiql/state-graphql';

// Modules


export const initialState = { ...GRAPHIQL_INITIAL_STATE };


export default function mapStateToProps (state) {
  return { ...graphiql(state) }
}
