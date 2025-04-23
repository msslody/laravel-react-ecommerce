// components/pages/User.jsx
import { useEffect, useState } from 'react';
import axios from '../../axios';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')  // Fetch all users
      .then(res => setUsers(res.data))
      .catch(err => {
        console.error(err);
        alert('Failed to fetch users');
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Users</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
