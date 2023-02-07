import { Header, Layout } from "./components/Layout";
import { Posts } from "./components/Posts/Posts";

export const App = () => {
  return (
    <Layout>
      <Header title="Bootcamp-42" />
      <Posts />
    </Layout>
  );
};
