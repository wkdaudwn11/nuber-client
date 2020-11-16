import React, { PropsWithChildren } from "react";
import { DataProps, graphql, MutateProps } from "react-apollo";
import { Reset } from 'styled-reset'
import theme from "../../theme";
import { ThemeProvider } from "../../typed-components";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }: PropsWithChildren<Partial<DataProps<{}, {}>> & Partial<MutateProps<{}, {}>>> | any) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);