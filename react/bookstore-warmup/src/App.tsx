import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/common/Logout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./components/Login/Login";
import Auth from "./components/routes/auth/Auth";
import "../src/assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Route>
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <p>app</p>
            </ProtectedRoute>
          }
        >
          <Route path="books" element={<p />}>
            <Route path=":id" element={<p>id of book</p>}></Route>
          </Route>
          <Route path="settings" element={<p>settings</p>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/app/books" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
