import React from 'react';
import GraphiQL from 'graphiql';
import '../node_modules/graphiql/graphiql.css';
import '../themes/graphiql-theme.css';
import '../themes/graphiql-paper.css';
import '../themes/graphiql-material.css';
import '../themes/graphiql-neo.css';

export default class CustomGraphiQL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // REQUIRED:
      // `fetcher` must be provided in order for GraphiQL to operate
      fetcher: () =>{},

      // OPTIONAL PARAMETERS
      // GraphQL artifacts
      query: '',
      variables: '',
      response: '',

      // GraphQL Schema
      // If `undefined` is provided, an introspection query is executed
      // using the fetcher.
      schema: undefined,

      // Useful to determine which operation to run
      // when there are multiple of them.
      operationName: null,
      storage: null,
      defaultQuery: null,

      // Custom Event Handlers
      onEditQuery: null,
      onEditVariables: null,
      onEditOperationName: null,

      // GraphiQL automatically fills in leaf nodes when the query
      // does not provide them. Change this if your GraphQL Definitions
      // should behave differently than what's defined here:
      // (https://github.com/graphql/graphiql/blob/master/src/utility/fillLeafs.js#L75)
      getDefaultFieldNames: null,

      // Code mirror theme for the editor window
      editorTheme: 'neo',

      // Code mirror theme for the results window 
      resultTheme: 'neo'
    };
  }

  // Example of using the GraphiQL Component API via a toolbar button.
  handleClickPrettifyButton(event) {
    const editor = this.graphiql.getQueryEditor();
    const currentText = editor.getValue();
    const { parse, print } = require('graphql');
    const prettyText = print(parse(currentText));
    editor.setValue(prettyText);
  }

  // fetchGraphQL (graphQLParams) {
  //   const { id, token } = localAuth();
  //   const url = API_ROUTE;

  //   axios.defaults.baseURL = url;
  //   axios.defaults.headers.common['Authorization'] = JSON.stringify({ id, token });
  //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  //   const axiosConfig = {
  //     url,
  //     method: 'POST'
  //   };
    
  //   return axios({
  //     ...axiosConfig,
  //     data: graphQLParams
  //   }).then(response => response.data.data)
  //   .then(response => {
  //     return response;
  //   })
  //   .catch(error => console.log(error));
  // }

  render() {
    return <div className={`graphiql-theme ${this.props.gqlTheme}`}>
      <GraphiQL {...this.state}>
        <GraphiQL.Toolbar>

          <GraphiQL.Button
            onClick={this.handleClickPrettifyButton}
            label="Prettify"
            title="Prettify Query"
          />


        </GraphiQL.Toolbar>
        <GraphiQL.Footer>
          <span className='by'>By Otis Virginie</span>
          otissv@gmail.com
        </GraphiQL.Footer>
      </GraphiQL>
    </div>;
  }
}