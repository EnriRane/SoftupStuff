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
import { useEffect, useState, useCallback } from "react";
import User from "../Components/User/User";
import Spinner from "../Components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { getUsers } from "../Services/userService";
import { useSelector } from "react-redux";
import { getAllUsers } from "../redux/reducers/userReducer";
import { getFinalId } from "../utils/getLastIdInArray";
import { useLocation } from "react-router-dom";
import "../Assets/Css/Users.css";
var firstTimeRender = true;
var Users = function () {
    var _a = useState(""), error = _a[0], setError = _a[1];
    var _b = useState(false), isPending = _b[0], setIsPending = _b[1];
    var dispatch = useDispatch();
    var location = useLocation();
    var lastId = useSelector(function (state) { return state.users.lastId; });
    var users = useSelector(function (state) { return getAllUsers(state); });
    console.log("USERS--->", users);
    var getAndDispatchUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
        var users_1, finalId, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsPending(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, getUsers(lastId)];
                case 2:
                    users_1 = _a.sent();
                    dispatch({ type: "addAllUsers", payload: users_1 });
                    finalId = getFinalId(users_1);
                    dispatch({ type: "changeLastId", payload: finalId });
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError(error_1.message);
                    return [3 /*break*/, 5];
                case 4:
                    setIsPending(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getSomeUsers = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAndDispatchUsers()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [dispatch, location.state]);
    useEffect(function () {
        if (firstTimeRender) {
            getSomeUsers();
        }
        firstTimeRender = false;
    }, [getSomeUsers]);
    var handleLoadMoreUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAndDispatchUsers()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    if (error) {
        return (_jsxs("h1", __assign({ className: "error" }, { children: [_jsx("i", { className: "fa-solid fa-skull-crossbones" }), "\u00A0\u00A0", error] })));
    }
    return (_jsxs("div", __assign({ className: "users" }, { children: [isPending ? _jsx(Spinner, {}) : null, _jsxs("div", { children: [_jsx("ul", __assign({ className: "usersList" }, { children: users.map(function (user) { return (_jsx(User, { user: user, id: user.id }, user.id || Math.random(50))); }) })), isPending ? null : (_jsx("button", __assign({ id: "load", onClick: handleLoadMoreUsers, className: "load" }, { children: "Load users" })))] })] })));
};
export default Users;
//# sourceMappingURL=Users.js.map