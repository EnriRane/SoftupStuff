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
import "../Assets/Css/Navbar.css";
import gitHubIcon from "../Assets/images/githubIcon.png";
var Navbar = function () {
    return (_jsxs("header", __assign({ className: "title" }, { children: [_jsx("div", { children: _jsx("img", { src: gitHubIcon, alt: "Github Logo" }) }), _jsx("div", { children: _jsx("h1", { children: "Github Users " }) })] })));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map