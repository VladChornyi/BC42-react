import { Banner } from "./components/Banner/Banner";
import { useEffect, useState } from "react";
import { Counter } from "./components/Counter/Counter";
import Filmoteka from "./components/Filmoteka/Filmoteka";
import { Header, Layout } from "./components/Layout";
import { Memo } from "./components/Memo/Memo";
// import { Rerender } from "./components/Rerender/Rerender";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UsersList, UsersPage } from "./pages/UsersPage/UsersPage";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import { Navigate, Route, Routes } from "react-router";
import TasksPage from "./pages/TasksPage/TasksPage";
import HomePage from "./pages/HomePage/HomePage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
// import { Posts } from "./components/Posts/Posts";

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/tasks" element={<TasksPage />}>
            <Route index element={<p>Choose task please</p>} />
            <Route path="banner" element={<Banner />} />
            <Route path="counter" element={<Counter />} />
            <Route path="filmoteka" element={<Filmoteka />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/:userId" element={<SingleUserPage />} />
            <Route path="*" element={<Navigate to="/tasks" />} />
          </Route>
        </Route>
      </Routes>

      {/* <Header title="Bootcamp-42" /> */}
      {/* <PostsPage /> */}
      {/* <SinglePostPage /> */}
      {/* <UsersList /> */}
      {/* <Rerender /> */}
      {/* <Test text={"Text"}>
            <Counter />
            <Memo />
          </Test> */}

      {/* <Counter /> */}
      {/* <Banner /> */}
      {/* <Posts /> */}
      {/* <Filmoteka /> */}
    </AuthProvider>
  );
};
