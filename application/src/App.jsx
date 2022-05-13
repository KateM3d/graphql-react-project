import "./App.scss";
import Tabs from "./components/Tabs/Tabs";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3005/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Tabs />
    </ApolloProvider>
  );
}

export default App;
