import { Banner } from "./components/Banner/Banner";
// import { Counter } from "./components/Counter/Counter";
// import Filmoteka from "./components/Filmoteka/Filmoteka";
import { Header, Layout } from "./components/Layout";
// import { Posts } from "./components/Posts/Posts";

export const App = () => {
  return (
    <Layout>
      <Header title="Bootcamp-42" />
      {/* <Counter /> */}
      <Banner />
      {/* <Posts /> */}
      {/* <Filmoteka /> */}
    </Layout>
  );
};
