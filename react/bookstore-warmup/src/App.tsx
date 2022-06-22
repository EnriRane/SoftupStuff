import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/common/Logout/Logout";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";
import Auth from "./components/routes/auth/Auth";
import { I18nextProvider } from "react-i18next";
import i18next from "./services/translationService";
import "../src/assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <Routes>
          <Route path="/" element={<Navigate to="/app/books" />} />
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
          <Route path="*" element={<p>not found</p>}></Route>
        </Routes>
      </I18nextProvider>
    </div>
  );
}

export default App;
