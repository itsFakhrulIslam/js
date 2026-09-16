import { useState } from "react";
import Users from "./Users";

const membersInfo = [{ fullName: "miraj hossen", age: 24 }];

export default function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [members, setMembers] = useState(membersInfo);
  console.log(members);

  const handleForm = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let age = e.target.age.value;

    let newUser = {
      fullName: name,
      age,
    };

    setMembers([...members, newUser]);

    e.target.reset('')
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add a new user</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed",
          padding: "50px",
        }}
      >
        <form
          style={{ textAlign: "center", padding: "10px" }}
          onSubmit={handleForm}
        >
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="" />
          <br />
          <label htmlFor="">Age</label>
          <input type="number" name="age" id="" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
      <Users user={name} age={age} />
      <Users />
    </>
  );
}
