import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <div className="demo-block">{name}</div>
    </div>
  );
};

export default UserDetails;
