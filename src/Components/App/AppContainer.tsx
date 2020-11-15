import React, { PropsWithChildren } from "react";
import AppPresenter from "./AppPresenter";
import { DataProps, graphql, MutateProps } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }: PropsWithChildren<Partial<DataProps<{}, {}>> & Partial<MutateProps<{}, {}>>> | any) => (
  <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
);

export default graphql(IS_LOGGED_IN)(AppContainer);