import { useEffect, useState } from "react";
import { usersData } from "../../../../utils/usersData";

const UserForm = ({ setUsers, selectedUser }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  // 🔥 Sync selectedUser with form state
  useEffect(() => {
    if (selectedUser) {
      setValues({
        name: selectedUser.name,
        email: selectedUser.email,
      });
    } else {
      setValues({
        name: "",
        email: "",
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name || !values.email) return;

    if (selectedUser) {
      // ✅ update user
      setUsers((prev) =>
        prev.map((user) =>
          user.id === selectedUser.id
            ? { ...user, ...values }
            : user
        )
      );
    } else {
      // ✅ add user
      setUsers((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...values,
        },
      ]);
    }

    // reset form after submit
    setValues({ name: "", email: "" });
  };

  return (
    <div>
      <h3>{selectedUser ? "Update User" : "Add User"}</h3>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={values.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
        />

        <button type="submit">
          {selectedUser ? "Update" : "Add"} User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
