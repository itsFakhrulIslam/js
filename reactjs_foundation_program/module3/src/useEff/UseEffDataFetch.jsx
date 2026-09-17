import { useEffect, useState } from "react";
import UsersCard from "../components/UsersCard";

const UseEffDataFetch = () => {
  const [users, setUsers] = useState([]);
  //   console.log(users);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        throw new Error("somethin went wrong by Miraj 🤣");

        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        User Loading...
      </p>
    );
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>data fetch</h1>
      {users.map((user) => (
        <UsersCard key={user.id} user={user}></UsersCard>
      ))}
    </div>
  );
};

export default UseEffDataFetch;
