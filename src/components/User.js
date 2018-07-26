import React, { Component } from 'react';
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {add_random_user} from "../actions";
class User extends Component {

  render() {
    //相当于increment = this.props.increment;
    //console.dir(this.props)
    const { add_random_user} = this.props;
    const { user,error,isFetching } = this.props.user;
    let data;
    if (error) {
        data = error;
    } else if(isFetching){
        data="Loading..."
    }else{
        data =user.email
    }
    return (
      <div className="container">
        <h1 className="jumbotton-heading text-center">{data}</h1>
        {/* 引用{this.props.counter} */}
          <p className="text-center">
            <button onClick={() => add_random_user()} className="btn btn-success mr-2">Add Random User</button>
          </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {//state相当于store.getState(),把state转为props,用于组件间数据传递
  return { user: state.user };//这里对应是rootReducer中key为counter,之后可用this.props.counter调用reducers中的state
};
//  const mapDispatchToProps=(dispatch) =>{
//    return bindActionCreators(types,dispatch) 
//  }
User.PropTypes = {
  user: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.string.isRequired,
  add_random_user: PropTypes.func.isRequired
}
export default connect(mapStateToProps,{add_random_user})(User)

