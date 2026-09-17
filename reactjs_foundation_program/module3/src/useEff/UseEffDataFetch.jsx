import { useEffect, useState } from "react";
import UsersCard from "../components/UsersCard";

const UseEffDataFetch = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  //   older ways to define
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         // throw new Error("somethin went wrong by Miraj 🤣");

  //         if (!res.ok) {
  //           throw new Error(res.message || "somethin went wrong by Miraj 🤣");
  //         }

  //         return res.json();
  //       })
  //       .then((data) => setUsers(data))
  //       .catch((err) => {
  //         setError(err.message);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   modern ways to define
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error(res.message || "somethin went wrong by Miraj 🤣");
        }

        const data = await res.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
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

  if (error) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error}
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
