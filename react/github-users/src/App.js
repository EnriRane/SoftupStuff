import { ToastContainer } from "react-toastify";
import "./Assets/Css/App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Users from "./Pages/Users";
import Navbar from "./Layout/Navbar";
function App() {
  return (
    <div className="App">
      <ToastContainer />
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
