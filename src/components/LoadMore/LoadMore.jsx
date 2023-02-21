import { useDispatch } from "react-redux";
import { loadMoreAction } from "../../redux/posts/posts-slice";
import { Button } from "../Button";

export const LoadMore = () => {
  const dispatch = useDispatch();
  const handleChangePage = () => {
    dispatch(loadMoreAction());
  };
  return (
    <Button className="ms-4 btn-primary" onClick={handleChangePage}>
      Load more
    </Button>
  );
};
