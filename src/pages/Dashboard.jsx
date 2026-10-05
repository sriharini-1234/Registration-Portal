import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    setUsers(registeredUsers);
  };

  useEffect(() => {
    loadUsers();

    const handleUsersUpdate = () => loadUsers();

    window.addEventListener(
      "registered-users-updated",
      handleUsersUpdate
    );

    return () => {
      window.removeEventListener(
        "registered-users-updated",
        handleUsersUpdate
      );
    };
  }, []);

  const totalUsers = users.length;

  const today = new Date().toDateString();

  const todayUsers = users.filter((user) => {
    if (!user.createdAt) return false;

    return new Date(user.createdAt).toDateString() === today;
  });

  const recentUsers = [...users].reverse().slice(0, 5);

  return (
    <section className="dashboard">

      {/* Dashboard Header */}

      <div className="dashboard-header">

        <div>
          <span className="badge">
            Welcome to the Dashboard 
          </span>

          <h1>Welcome to Registration Portal</h1>

          <p>
            Here's an overview of your registration portal.
          </p>
        </div>

        <Link
          to="/register"
          className="dashboard-primary-button"
        >
          New Registration
        </Link>

      </div>


      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div>
            <p>Total Registered Users</p>

            <h2>{totalUsers}</h2>

            <span className="stat-description">
              All registered users
            </span>
          </div>
        </div>


        <div className="dashboard-stat-card">
          <div>
            <p>Today's Registrations</p>

            <h2>{todayUsers.length}</h2>

            <span className="stat-description">
              Registered today
            </span>
          </div>
        </div>


        <div className="dashboard-stat-card">
          <div>
            <p>Pending Registrations</p>

            <h2>0</h2>

            <span className="stat-description">
              Currently pending
            </span>
          </div>
        </div>


        <div className="dashboard-stat-card">
          <div>
            <p>Successful Registrations</p>

            <h2>{totalUsers}</h2>

            <span className="stat-description success-text">
              Successfully registered
            </span>
          </div>
        </div>

      </div>


      {/* Main Dashboard Content */}

      <div className="dashboard-content">


        {/* Recent Registrations */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <h2>Recent Registrations</h2>

              <p>
                Latest users who registered.
              </p>
            </div>

            <Link
              to="/users"
              className="view-all-link"
            >
              View All
            </Link>

          </div>


          {recentUsers.length === 0 ? (

            <div className="empty-dashboard">

              <h3>No registrations yet</h3>

              <p>
                Start by creating a new registration.
              </p>

              <Link
                to="/register"
                className="dashboard-secondary-button"
              >
                Create Registration
              </Link>

            </div>

          ) : (

            <div className="recent-users">

              {recentUsers.map((user) => (

                <div
                  className="recent-user"
                  key={user.id}
                >

                  <div className="recent-user-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="recent-user-info">

                    <h3>{user.name}</h3>

                    <p>{user.email}</p>

                  </div>

                  <span className="registered-badge">
                    Registered
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* Quick Actions */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <h2>Quick Actions</h2>

              <p>
                Frequently used actions.
              </p>
            </div>

          </div>


          <div className="quick-actions">

            <Link
              to="/register"
              className="quick-action"
            >

              <div>
                <h3>New Registration</h3>

                <p>
                  Register a new user
                </p>
              </div>

              <span>
                →
              </span>

            </Link>


            <Link
              to="/users"
              className="quick-action"
            >

              <div>
                <h3>View Registered Users</h3>

                <p>
                  View all registered users
                </p>
              </div>

              <span>
                →
              </span>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;