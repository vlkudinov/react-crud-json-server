import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import promise from 'redux-promise'
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history), promise, thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
export default createStore(reducers(history), initialState, composedEnhancers);
