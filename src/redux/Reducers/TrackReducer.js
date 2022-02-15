import {TRACK_PLAY, TRACK_PAUSE, ALL_TRACKS} from '../Constants';

const initialState = {
  track: false,
  data: null,
  allTracks: null,
};

export default function TrackReducer(state = initialState, action) {
  switch (action.type) {
    case TRACK_PLAY:
      state = {
        ...state,
        track: true,
        data: action.payload,
      };
      break;
    case TRACK_PAUSE:
      state = {
        ...state,
        track: false,
        data: null,
      };
      break;
    case ALL_TRACKS:
      state = {
        ...state,
        track: false,
        allTracks: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}