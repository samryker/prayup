import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {LOADER_FALSE, LOADER_TRUE, LOGIN_SUCCESS} from '../Constants';

export class LoaderAction extends Component {
  static LoaderTrue() {
    return {type: LOADER_TRUE};
  }
  static LoaderFalse() {
    return {type: LOADER_FALSE};
  }
}

export default LoaderAction;
