import { Routes, Route, Navigate } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Users from "./Pages/Users";
import Navbar from "./Layout/Navbar";
import "./Assets/Css/App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/userDetails/:id" element={<UserDetails />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
