import {LOADER_FALSE, LOADER_TRUE} from '../Constants';

const initialState = {
  loader: false,
};

export default function LoaderReducer(state = initialState, action) {
  switch (action.type) {
    case LOADER_TRUE:
      state = {
        loader: true,
      };
      break;
    case LOADER_FALSE:
      state = {
        loader: false,
      };
      break;

    default:
      break;
  }
  return state;
}
