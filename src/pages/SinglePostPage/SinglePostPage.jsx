import { useEffect, useState } from "react";
import { getSinglePost } from "../../services/postsService";

const SinglePostPage = () => {
  const [postData, setPostdata] = useState(null);
  const postId = "210";

  useEffect(() => {
    getSinglePost(postId).then((data) => {
      setPostdata(data);
    });
  }, []);

  return (
    <section>
      {postData && (
        <>
          <img style={{ maxWidth: "100%" }} src={postData.image} alt="post" />
          <h2>{postData.title}</h2>
          <p>{postData.content}</p>
        </>
      )}
    </section>
  );
};

export default SinglePostPage;
