import axios from "axios";
import { Button } from "../../components/Button";
import { FETCH_STATUS } from "../../constants/fetchStatus";
import { useState, useEffect, useRef } from "react";

import { getPosts } from "../../services/postsService";

import { PostsError } from "./PostsErorr";
import { PostsItem } from "./PostsItem";
import { PostsLoader } from "./PostsLoader";
import { SearchPosts } from "./SearchPosts";

// const LOCAL_KEY = 'state';
// const initial = { page: 1, isLoading: false };

export const PostsPage = () => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(FETCH_STATUS.idle);

  // const [state, setState] = useState(...initial);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setStatus(FETCH_STATUS.loading);
      try {
        const posts = await getPosts();
        setPosts(posts);
        setStatus(FETCH_STATUS.resolved);
      } catch (error) {
        setStatus(FETCH_STATUS.rejected);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchMore = async () => {
      setStatus(FETCH_STATUS.loading);
      try {
        const posts = await getPosts(page);
        setPosts((prevPosts) => ({
          ...posts,
          data: [...prevPosts.data, ...posts.data],
        }));
        setStatus(FETCH_STATUS.resolved);
      } catch {
        setError(FETCH_STATUS.rejected);
      }
    };
    fetchMore();
  }, [page]);

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
    setIsLoading(true);
  };

  if (status === FETCH_STATUS.loading) {
    return <PostsLoader />;
  }
  if (status === FETCH_STATUS.rejected) {
    return <PostsError />;
  }
  return (
    <>
      <SearchPosts />
      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts?.data?.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          <Button className="ms-4 btn-primary" onClick={handleChangePage}>
            Load more
          </Button>
        </div>
      </div>
    </>
  );
};
