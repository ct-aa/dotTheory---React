import { useState, useEffect } from "react";
import "./DataFetchingInReact.css";

const DataFetchingInReact = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1 className="headline">Data Fetching in React</h1>
      <div className="demo-block">
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <p className="user" key={user.id}>
              {user.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default DataFetchingInReact;
