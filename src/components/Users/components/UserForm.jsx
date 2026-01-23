import { useState } from "react";

const UserForm = ({ setUsers }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name || !values.email) return;

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: prevUsers.length + 1,
        name: values.name,
        email: values.email,
      },
    ]);

    // clear form
    setValues({ name: "", email: "" });
  };

  return (
    <div>
      <h3>Add User</h3>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
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

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
