import ApolloClient, { Operation } from "apollo-boost";

// GraphQL API 주소 세팅
const client = new ApolloClient({
  clientState: {
    defaults: {
      // 아래의 값은 브라우저의 Cache를 설정해주는 것이라고 보면 될듯. (auth라는 이름의 Cache 기본값 세팅)
      auth: {
        __typename: "Auth",
        isLoggedIn: Boolean(localStorage.getItem("jwt"))
      }
    },
    resolvers: {
      Mutation: {
        logUserIn: (_, { token }, { cache }) => {
          // 로그인을 했을 경우엔 localStorage 세팅을 해주고 auth Cache의 isLoggedIn 값을 true로 변경
          localStorage.setItem("jwt", token);
          cache.writeData({
            data: {
              auth: {
                __typename: "Auth",
                isLoggedIn: true
              }
            }
          });
          return null;
        },
        logUserOut: (_, __, { cache }) => {
          // 로그아웃을 했을 경우엔 localStorage를 지워주고 auth Cache의 isLoggedIn 값을 false로 변경
          localStorage.removeItem("jwt");
          cache.writeData({
            data: {
              auth: {
                __typename: "Auth",
                isLoggedIn: false
              }
            }
          });
          return null;
        }
      }
    }
  },
  request: async (operation: Operation) => {
    /**
     * 모든 request의 header값을 세팅해주는 옵션.
     * localStorage 안에 jwt라는 녀석이 있으면 X-JWT라는 이름으로 header값에 세팅해줌.
     */
    operation.setContext({
      headers: {
        "X-JWT": localStorage.getItem("jwt") || ""
      }
    });
  },
  uri: "http://localhost:4000/graphql"
});

export default client;