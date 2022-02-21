import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    //console.log(userDetails);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userDetails) {
      try {
        const response = await axios.post("user/login", userDetails);
        console.log(response.err)
        //store the user details to local storage.....
        if (response.data.data) {
          localStorage.setItem(
            "userAuth",
            JSON.stringify({
              auth: true,
              token: response.data.data.token,
              userId: response.data.data.userID,
            })
          );
          setUser({
            auth: true,
            token: response.data.data.token,
            userId: response.data.data.userID,
          });
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="user-email">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="user-passowrd">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
