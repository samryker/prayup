import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  GET_COUNT,
  GET_OPEN_PROJECTS,
  GET_CLOSE_PROJECTS,
  GET_RECENT_FILES,
  GET_MESSAGES,
  GET_ALL_PROJECTS,
  GET_PROJECTS,
  GET_ACTIVE_SUB,
  GET_INACTIVE_SUB,
  CHANGE_STATUS,
} from '../Constants';

export class DatabaseAction extends Component {
  static GetCount(data) {
    return {type: GET_COUNT, payload: data};
  }
  static GetProjects(data) {
    return {type: GET_PROJECTS, payload: data};
  }
  static GetOpenProjects(data) {
    return {type: GET_OPEN_PROJECTS, payload: data};
  }
  static GetCloseProjects(data) {
    return {type: GET_CLOSE_PROJECTS, payload: data};
  }
  static GetRecentFiles(data) {
    return {type: GET_RECENT_FILES, payload: data};
  }
  static GetMessages(data) {
    return {type: GET_MESSAGES, payload: data};
  }
  static GetAllProjects(data) {
    return {type: GET_ALL_PROJECTS, payload: data};
  }
  static GetActiveSubscriptions(data) {
    return {type: GET_ACTIVE_SUB, payload: data};
  }
  static GetInactiveSubscriptions(data) {
    return {type: GET_INACTIVE_SUB, payload: data};
  }
  static ChangeStatus(data) {
    return {type: CHANGE_STATUS, payload: data};
  }
}

export default DatabaseAction;
