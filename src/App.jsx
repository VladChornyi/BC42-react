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
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Skills } from "./components/Skills/Skills";
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
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/skills" element={<Skills />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};
