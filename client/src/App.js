import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>    
  );
}

export default App;
