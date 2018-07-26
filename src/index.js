import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import thunk from "redux-thunk"
// Logger with default options
import logger from 'redux-logger'

//自定义日志中间件
// const logger = store =>next=>action=>{//嵌套函数
//     console.log("dispatching",action);//1
//     let result = next(action);//按顺序传给下个中间件error
//     console.log("next state",store.getState());//3
//     return result;
// };
//捕获error的中间件
const error = store =>next=>action=>{
    try {
        next(action)//没有下个中间件时,执行reducer
    } catch (e) {
        console.log("error"+e)//2
    }
};
const store = createStore(rootReducer,{},applyMiddleware(logger,error,thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
