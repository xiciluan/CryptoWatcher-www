import React from 'react';

import { Container } from 'semantic-ui-react'
import TopBar from "./components/TopBar"
import Home from './components/Home'
import LiveCharts  from './components/LiveCharts'
import About from './components/About'
import QueryBuilder from './components/QueryBuilder'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://44.224.32.162:4000/graphql',
});


function App() {
  return (
    <Container>
      <ApolloProvider client={client}>
        <Router>
          <TopBar />
          <Container style={{ marginTop: '4em' }}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/live-charts">
                <LiveCharts />
              </Route>
              <Route path="/query-builder">
                <QueryBuilder />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Container>
        </Router >
      </ApolloProvider>
    </Container >
  );
}

export default App;
