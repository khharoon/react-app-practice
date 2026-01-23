import { useState } from "react";
import { usersData } from "../../../utils/usersData";
import Title from "./components/Title";
import UserForm from "./components/UserForm";
import Users from "./components/Users";

function UsersDashboard() {
    const [users, setUsers] = useState(usersData);

  return (
    <div
      style={{
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Title />

      <div
        className=""
        style={{
          border: "2px solid brown",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <UserForm setUsers={setUsers}/>
        <Users users={users}/>
      </div>
    </div>
  );
}

export default UsersDashboard;
