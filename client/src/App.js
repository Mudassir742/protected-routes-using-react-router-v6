import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";

import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    auth && setUser(JSON.parse(auth))
  }, []);

  return (
    <Router>
      <Navigation setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
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
