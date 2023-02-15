import { Link, useLocation } from "react-router-dom";

const GoBack = () => {
  const location = useLocation();
  return <Link to={location.state?.from ?? "/posts"}>Go back</Link>;
};

export default GoBack;
