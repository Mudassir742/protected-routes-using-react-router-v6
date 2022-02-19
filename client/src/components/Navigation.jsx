import { NavLink } from "react-router-dom";

const Navigation = ({ user, setUser }) => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
      {user ? (
        <button
          onClick={(e) => {
            setUser(false);
            localStorage.setItem("auth", "false");
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={(e) => {
            setUser(true);
            localStorage.setItem("auth", "true");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navigation;
