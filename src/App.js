import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
