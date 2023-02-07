import { Banner } from "./components/Banner";
// import { Counter } from "./components/Counter";
import { Header, Layout } from "./components/Layout";
// import { Skills } from "./components/Skills/Skills";
// import { skillsList } from "./config";
// import { LoginForm } from "./components/LoginForm/LoginForm";
import Filmoteka from "./components/Filmoteka/Filmoteka";
import Rerender from "./components/Rerender/Rerender";
// import { UsersList } from "./components/Users";

export const App = () => {
  return (
    <Layout>
      <Header title="Bootcamp-42" />
      {/* <Counter /> */}
      <Banner test="test" />
      {/* <Rerender /> */}
      {/* <UsersList /> */}
      {/* <br /> */}
      {/* <LoginForm list={skillsList} /> */}
      <Filmoteka />
    </Layout>
  );
};
