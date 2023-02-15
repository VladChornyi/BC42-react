import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../../services/usersService";

const SingleUserPage = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUserById(userId);
        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserData();
  }, [userId]);

  return (
    <div>
      {userData && (
        <>
          <img src={userData?.avatar} alt="user" width="500" />
          <h2>{userData?.name}</h2>
          <p>{userData?.address}</p>
          <p>{userData?.email}</p>
          <img src={userData?.animalPhoto} alt="user" width="200" />
        </>
      )}
    </div>
  );
};

export default SingleUserPage;
