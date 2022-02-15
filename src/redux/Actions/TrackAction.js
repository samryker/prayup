import React, {Component} from 'react';
import {TRACK_PLAY,TRACK_PAUSE} from '../Constants';

export class TrackAction extends Component {
  static TrackPlay(data) {
    return {type: TRACK_PLAY, payload: data};
  }
  static TrackPause() {
    return {type: TRACK_PAUSE};
  }
  static ALLTrack(data) {
    return {type: ALL_TRACKS, payload: allTracks};
  }
}

export default TrackAction;
