import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import { cartReducer } from "./Reducers";
import createSagaMiddleware from "redux-saga";
import { Watchers } from "./Sagas";
const rootReducer = combineReducers({ items: cartReducer });

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(rootReducer);
// sagaMiddleWare.run(Watchers);
