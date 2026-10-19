import { useState } from "react";
import useUsers from "../hooks/useUsers";

function UsersExplorer() {
  const { users, loading, error, retry } = useUsers();
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleUsers = users.slice(0, visibleCount);
  console.log({
  usersLength: users.length,
  loading,
  error,
  visibleCount,
});

  const handleLoadMore = () => {
    setVisibleCount((count) => count + 3);
  };

  return (
    <section>
      <h2>Users Explorer</h2>

      {loading && <p>Loading users...</p>}

      {error && (
        <div>
          <p role="alert">{error}</p>
          <button type="button" onClick={retry}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <p>No users found.</p>
      )}

      {!loading && !error && users.length > 0 && (
        <div>
          <p>
            Showing {visibleUsers.length} of {users.length} users
          </p>

          <ul>
            {visibleUsers.map((user) => (
              <li key={user.id}>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Company: {user.company.name}</p>
              </li>
            ))}
          </ul>

          <button
  type="button"
  onClick={handleLoadMore}
  style={{ display: "block", margin: "16px auto" }}
>
  Load More ({visibleCount}/{users.length})
</button>
        </div>
      )}
    </section>
  );
}

export default UsersExplorer;