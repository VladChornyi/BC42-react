import { Component } from "react";
import { getPosts } from "../../services/postsService";

import { PostsItem } from "./PostsItem";
import { Button } from "../Button";
import { SearchPosts } from "./SearchPosts";
import { PostsLoader } from "./PostsLoader";
import { PostsError } from "./PostsErorr/PostsErorr";
import { FETCH_STATUS } from "../../constants/fetchStatus";

// const LOCAL_KEY = 'state';

export class Posts extends Component {
  state = {
    posts: [],
    status: FETCH_STATUS.idle,
    page: 1,
    limit: 5,
    total_pages: 1,
    search: "",
  };

  componentDidMount() {
    this.fetchPosts();
  }

  handleChangeSearch = (search) => {
    this.setState({ search, page: 1, posts: [] });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.search !== this.state.search
    ) {
      this.fetchPosts();
    }
  }

  fetchPosts = async () => {
    this.setState({
      status: FETCH_STATUS.loading,
    });
    try {
      const response = await getPosts({
        page: this.state.page,
        limit: this.state.limit,
        search: this.state.search,
      });
      this.setState((prevState) => ({
        posts: [...prevState.posts, ...response.data],
        total_pages: response.total_pages,
        status: FETCH_STATUS.fullfilled,
      }));
    } catch (error) {
      console.log(error);
      this.setState({
        status: FETCH_STATUS.rejected,
      });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { posts, status, page, total_pages } = this.state;

    if (status === FETCH_STATUS.loading) {
      return <PostsLoader />;
    }
    if (status === FETCH_STATUS.rejected) {
      return <PostsError />;
    }
    return (
      <>
        <SearchPosts onClick={this.handleChangeSearch} />
        <div className="container-fluid g-0">
          <div className="row">
            {posts.map((post) => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-1 mx-auto btn-group-lg">
            <Button
              onClick={this.handleLoadMore}
              disabled={total_pages === page}
              className="ms-4 btn-primary"
            >
              Load more
            </Button>
          </div>
        </div>
      </>
    );
  }
}

{
  /* <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> */
}
