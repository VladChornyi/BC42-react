import { FETCH_STATUS } from "../../constants/fetchStatus";
import { useEffect, useRef } from "react";
import { PostsError } from "./PostsErorr";
import { PostsItem } from "./PostsItem";
import { PostsLoader } from "./PostsLoader";
import { SearchPosts } from "./SearchPosts";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk, loadMoreThunk } from "../../redux/posts/posts-thunk";
import {
  selectPosts,
  selectPostsPage,
  selectPostsStatus,
} from "../../redux/posts/posts-selector";
import { LoadMore } from "../../components/LoadMore/LoadMore";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const search = params.get("search");
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);
  const page = useSelector(selectPostsPage);

  const isFirstRender = useRef(true);

  useEffect(() => {
    dispatch(getPostsThunk({ search }));
  }, [search, dispatch]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(loadMoreThunk({ page }));
  }, [page, dispatch]);

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
          {posts?.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          <LoadMore />
        </div>
      </div>
    </>
  );
};
