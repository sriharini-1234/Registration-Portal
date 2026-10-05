import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    setUsers(storedUsers);
  }, []);

  return (
    <section className="users-section">
      <div className="section-heading">
        <h2>Registered Users</h2>
        <p>View all users registered in the portal.</p>
      </div>

      {users.length === 0 ? (
        <div className="no-results">
          No users registered yet.
        </div>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id || user.email}>
              <div className="avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>

              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <span>Active</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <Link to="/dashboard" className="dashboard-secondary-button">
          Back to Dashboard
        </Link>
      </div>
    </section>
  );
}

export default Users;
