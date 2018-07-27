import { createStore, applyMiddleware } from "redux"
import rootReducer from '../reducers/'
import thunk from "redux-thunk"
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (preloadedState) => {
    const store = createStore(rootReducer, preloadedState,
        composeWithDevTools(applyMiddleware(logger, promiseMiddleware(), thunk)));
    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept('../reducers', () => {
                store.replaceReducer(rootReducer)
            })
        }
    }
    return store;
};
export default configureStore;