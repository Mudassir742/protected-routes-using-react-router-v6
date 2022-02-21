import { NavLink } from "react-router-dom";

const Navigation = ({ user, setUser }) => {

  const handleLogout =(e) => {
    setUser(null)
    localStorage.removeItem("userAuth");
  }

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
      {user ? (
        <button
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <NavLink to="/login">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
