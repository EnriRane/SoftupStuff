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
import { Link } from "react-router-dom";
import "./User.css";
var User = function (_a) {
    var user = _a.user;
    return (_jsxs("div", __assign({ className: "user" }, { children: [_jsx("div", { children: _jsx("a", __assign({ className: "repository", href: user.html_url, target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { src: user.avatar_url, alt: "" }) })) }), _jsxs("div", __assign({ className: "bottomPart" }, { children: [_jsx("div", { children: _jsx("h1", { children: user.login }) }), _jsx("div", { children: _jsx(Link, __assign({ className: "details", to: "/userDetails/".concat(user.login) }, { children: "Show details" })) })] }))] })));
};
export default User;
//# sourceMappingURL=User.js.map