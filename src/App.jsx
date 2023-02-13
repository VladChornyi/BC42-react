// import { Banner } from "./components/Banner/Banner";
import { useEffect, useState } from "react";
import { Counter } from "./components/Counter/Counter";
import Filmoteka from "./components/Filmoteka/Filmoteka";
import { Header, Layout } from "./components/Layout";
import Test from "./components/Test/Test";
import { Memo } from "./components/Memo/Memo";
// import { Rerender } from "./components/Rerender/Rerender";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UsersList } from "./components/UsersList/UsersList";
// import { Posts } from "./components/Posts/Posts";

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Header title="Bootcamp-42" />
          {/* <UsersList /> */}
          {/* <Rerender /> */}
          {/* <Test text={"Text"}>
            <Counter />
            <Memo />
          </Test> */}

          {/* <Counter /> */}
          {/* <Banner /> */}
          {/* <Posts /> */}
          <Filmoteka />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};
