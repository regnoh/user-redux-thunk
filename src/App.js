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

const mapStateToProps = (state) => {//state相当于store.getState(),把state转为props,用于组件间数据传递
  return { counter: state.counter };//这里对应是rootReducer中key为counter,之后可用this.props.counter调用reducers中的state
};
 const mapDispatchToProps=(dispatch) =>{
   return bindActionCreators(types,dispatch) 
 }
App.PropTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

