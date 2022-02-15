import React, {Component} from 'react';
import {LOGIN_SUCCESS,CLEAR_REDUX,} from '../Constants';

export class AuthAction extends Component {
  static Login(data) {
    return {type: LOGIN_SUCCESS, payload: data};
  }
  static ClearRedux() {
    return {type: CLEAR_REDUX};
  }
  
}

export default AuthAction;
