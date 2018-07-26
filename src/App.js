import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as types from "./actions";
import User from "./components/User";

class App extends Component {

  render() {
    //相当于increment = this.props.increment;
    //console.dir(this.props)
    const { increment,decrement } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotton-heading text-center">{this.props.counter}</h1>
        {/* 引用{this.props.counter} */}
        <p className="text-center">
          {/*  this.props.increment */}
          <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrement()} className="btn btn-primary mr-2">Decrease</button>
         </p>
          <User/>
      </div>
    );
  }
}

//(1)store = createStore(rootReducer)
//其中rootReducer = combineReducers({counter,应用中其他reducer});包含counter,
//则store.getState()返回整个应用所有state
//(2)当<Provide store={store}><App/></Provide>,App被根组件包含，
//综上用store.getState().counter可访问counter(counter返回新state，本例是数字类型)

//以下参数state对应store.getState(),mapStateToProps把state转为props,
//这里对应rootReducer中key为counter,之后可用this.props.counter调用reducers中的state
const mapStateToProps = (state) => {
  return { counter: state.counter };
};

//import * as types from "./actions";
//types是所有actions/index.js中的所有action creator函数（包括increment())
//把dispatch转为props，则可用this.props.increment调用
 const mapDispatchToProps=(dispatch) =>{
   return bindActionCreators(types,dispatch) 
 }
App.PropTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

