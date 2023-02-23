import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button } from "../../components/Button";
import { selectToken } from "../../redux/auth/auth-selector";

import { getSinglePost } from "../../services/postsService";

const SinglePostPage = () => {
  const token = useSelector(selectToken);
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
          {token && <Button>Add comment</Button>}
        </>
      )}
    </section>
  );
};

export default SinglePostPage;
