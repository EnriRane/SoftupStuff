import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/routes/auth/Logout/Logout";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import Login from "./components/routes/auth/Login/Login";
import Auth from "./components/routes/auth/Auth";
import { I18nextProvider } from "react-i18next";
import i18next from "./services/translationService";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/common/NotFound/NotFound";
import AppAppearance from "./components/routes/app/AppApperance";
import BooksTable from "./components/specificComponents/BooksTable/BooksTable";
import "../src/assets/styles/App.scss";
import "react-toastify/dist/ReactToastify.css";
import BookDetails from "./components/specificComponents/BookDetails/BookDetails";
import Settings from "./components/routes/app/Settings/Settings";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
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
                <AppAppearance />
              </ProtectedRoute>
            }
          >
            <Route path="books" element={<BooksTable />}></Route>
            <Route path="books/:id" element={<BookDetails />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </I18nextProvider>
    </div>
  );
};

export default App;
