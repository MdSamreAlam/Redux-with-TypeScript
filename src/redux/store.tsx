import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducer/index";
import thunk from "redux-thunk";
//import { composeWithDevTools } from 'redux-devtools-extension';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;