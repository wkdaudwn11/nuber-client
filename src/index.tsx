import React from 'react';
import { ApolloProvider } from "react-apollo";
import ReactDOM from 'react-dom';
import client from "./apollo";
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './global-styles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
