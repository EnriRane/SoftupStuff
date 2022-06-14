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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var initialState = {
    usersList: [],
    lastId: 0,
};
var userReducer = function (users, _a) {
    if (users === void 0) { users = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case "addAllUsers":
            var newUsers = __spreadArray(__spreadArray([], users.usersList, true), payload, true);
            var newState = __assign(__assign({}, users), { usersList: newUsers });
            return newState;
        case "changeLastId":
            return __assign(__assign({}, users), { lastId: payload });
        default:
            return __assign({}, users);
    }
};
var getAllUsers = function (state) {
    return state.users.usersList;
};
export { userReducer, getAllUsers };
//# sourceMappingURL=userReducer.js.map