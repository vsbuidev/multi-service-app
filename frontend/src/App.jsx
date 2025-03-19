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
      <h2>Multiple Service Application</h2>
      <h4>
        It is a multi-service monolithic architectured application running on
        Docker
      </h4>
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
            <div className="user-info">
              {user.name} ({user.email})
            </div>
            <div className="button-group">
              <button className="edit" onClick={() => editUser(user)}>
                Edit
              </button>
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
