// import { Banner } from "./components/Banner/Banner";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { JoinPage } from "./pages/JoinPage/JoinPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/auth-thunk";
const HomePage = lazy(() => import("./pages/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
