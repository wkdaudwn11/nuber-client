import React, { PropsWithChildren } from "react";
import { DataProps, graphql, MutateProps } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";

// type AppContainerProps = {
//   data: any;
// }

const AppContainer = ({ data }: PropsWithChildren<Partial<DataProps<{}, {}>> & Partial<MutateProps<{}, {}>>>) => <div>{JSON.stringify(data)}</div>;

export default graphql(IS_LOGGED_IN)(AppContainer);