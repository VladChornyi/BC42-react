import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import { getSinglePost } from "../../services/postsService";

// const images = [{ id: "1", image: "/..." }];
const SinglePostPage = () => {
  const { isAuth } = useContext(AuthContext);
  const [postData, setPostdata] = useState(null);
  const params = useParams();

  useEffect(() => {
    // setPostdata(images.find(item=>item.id ===postId));
    getSinglePost(params.postId).then((data) => {
      setPostdata(data);
    });
  }, [params.postId]);

  return (
    <section>
      {postData && (
        <>
          <img style={{ maxWidth: "100%" }} src={postData.image} alt="post" />
          <h2>{postData.title}</h2>
          <p>{postData.content}</p>
          {isAuth && <Button>Add comment</Button>}
        </>
      )}
    </section>
  );
};

export default SinglePostPage;
