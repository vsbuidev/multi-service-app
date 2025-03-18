import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => setUsers(res.data));
  }, []);

  const createUser = async () => {
    if (editingId) {
      const res = await axios.put(`${API_URL}/${editingId}`, { name, email });
      setUsers(users.map((user) => (user._id === editingId ? res.data : user)));
      setEditingId(null);
    } else {
      const res = await axios.post(API_URL, { name, email });
      setUsers([...users, res.data]);
    }
    setName("");
    setEmail("");
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setUsers(users.filter((user) => user._id !== id));
  };

  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingId(user._id);
  };

  return (
    <div className="container">
      <h2>
        Multiple Service Application using CRUD Operations Deployed in Docker
      </h2>
      <h2>Type : Microservices Architecture</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={createUser}>
        {editingId ? "Update User" : "Add User"}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})
            <button className="edit" onClick={() => editUser(user)}>
              Edit
            </button>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
