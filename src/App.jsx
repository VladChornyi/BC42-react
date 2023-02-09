// import { Banner } from "./components/Banner/Banner";
import { Counter } from "./components/Counter/Counter";
// import Filmoteka from "./components/Filmoteka/Filmoteka";
import { Header, Layout } from "./components/Layout";
// import { Memo } from "./components/Memo/Memo";
// import { Rerender } from "./components/Rerender/Rerender";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
// import { Posts } from "./components/Posts/Posts";

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Header title="Bootcamp-42" />
          {/* <Rerender /> */}
          {/* <Memo /> */}
          <Counter />
          {/* <Banner /> */}
          {/* <Posts /> */}
          {/* <Filmoteka /> */}
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};
