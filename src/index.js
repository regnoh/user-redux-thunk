import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from "redux"
import rootReducer from './reducers/'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from "react-redux"
import thunk from "redux-thunk"
// Logger with default options
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer,{},
    composeWithDevTools(applyMiddleware(logger,promiseMiddleware(),thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();