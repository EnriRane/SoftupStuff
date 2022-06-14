import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/combinedReducer";
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(reducer, composeEnhancers(applyMiddleware()));
export { store };
//# sourceMappingURL=store.js.map