var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import "./Assets/Css/App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Users from "./Pages/Users";
import Navbar from "./Layout/Navbar";
function App() {
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx(ToastContainer, {}), _jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Users, {}) }), _jsx(Route, { path: "/userDetails/:id", element: _jsx(UserDetails, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] })] })));
}
export default App;
//# sourceMappingURL=App.js.map