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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Assets/Css/UserDetails.css";
import { getUser } from "../Services/userService";
import LoadingSpinner from "../Components/Spinner/Spinner";
var UserDetails = function () {
    var _a = useState(false), error = _a[0], setError = _a[1];
    var _b = useState({}), user = _b[0], setUser = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var id = useParams().id;
    var getUserDetails = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, getUser(id)];
                case 2:
                    currentUser = _a.sent();
                    setUser(currentUser);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError(error_1.message);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [id]);
    useEffect(function () {
        getUserDetails();
    }, [getUserDetails]);
    if (error) {
        return (_jsxs("h1", __assign({ className: "error" }, { children: [_jsx("i", { className: "fa-solid fa-skull-crossbones" }), "\u00A0\u00A0", error] })));
    }
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", __assign({ className: "userDetails" }, { children: [_jsx("div", __assign({ className: "image" }, { children: _jsx("img", { src: user.avatar_url, alt: "avatar" }) })), _jsxs("div", __assign({ className: "rightContainer" }, { children: [_jsx("div", __assign({ className: "name" }, { children: _jsx("h1", { children: user.name }) })), _jsx("div", __assign({ className: "container" }, { children: _jsxs("form", { children: [_jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-25" }, { children: _jsx("label", { children: "Location" }) })), _jsx("div", __assign({ className: "col-75" }, { children: _jsx("p", { children: user.loaction ? user.loaction : "No location provided" }) }))] })), _jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-25" }, { children: _jsx("label", { children: "Email" }) })), _jsx("div", __assign({ className: "col-75" }, { children: _jsx("p", { children: user.email ? user.email : "No email provided" }) }))] })), _jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-25" }, { children: _jsx("label", { children: "Company" }) })), _jsx("div", __assign({ className: "col-75" }, { children: _jsxs("select", __assign({ id: "company", name: "company" }, { children: [_jsx("option", __assign({ value: "Companies", hidden: true }, { children: "Companies" })), user.company
                                                        ? user.company
                                                            .substring(1)
                                                            .split(", @")
                                                            .map(function (company) { return (_jsx("option", __assign({ value: company }, { children: company }), company)); })
                                                        : "No company provided"] })) }))] })), _jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-25" }, { children: _jsx("label", { children: "Public repositories" }) })), _jsx("div", __assign({ className: "col-75" }, { children: _jsx("p", { children: user.public_repos
                                                    ? user.public_repos
                                                    : "No respositories provided" }) }))] })), _jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-25" }, { children: _jsx("label", { children: "Followers" }) })), _jsx("div", __assign({ className: "col-75" }, { children: _jsx("p", { children: user.followers ? user.followers : "No followers provided" }) }))] })), _jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-25" }, { children: _jsx("label", { children: "Time joined github" }) })), _jsx("div", __assign({ className: "col-75" }, { children: _jsx("p", { children: user.created_at
                                                    ? new Date(user.created_at.slice(0, -1)).toUTCString()
                                                    : "No time provided" }) }))] })), _jsx("br", {}), _jsx("div", __assign({ className: "row" }, { children: _jsx(Link, __assign({ className: "button", to: "/" }, { children: "Go back" })) }))] }) }))] }))] })));
};
export default UserDetails;
//# sourceMappingURL=UserDetails.js.map