import { createStore, applyMiddleware } from "redux"
import rootReducer from '../reducers/'
import thunk from "redux-thunk"
import promiseMiddleware from 'redux-promise-middleware'

const configureStore = (preloadedState)=>{
    const store = createStore(rootReducer,preloadedState,
        applyMiddleware(promiseMiddleware(),thunk));
    return store;
};
export default configureStore;