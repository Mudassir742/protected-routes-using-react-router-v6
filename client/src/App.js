import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";

import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem('authUser')
    auth && setUser(JSON.parse(auth))
  }, []);

  return (
    <Router>
      <Navigation setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute auth={user}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
