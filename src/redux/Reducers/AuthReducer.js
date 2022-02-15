import {CLEAR_REDUX, LOGIN_SUCCESS} from '../Constants';

const initialState = {
  user: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = {
        user: action.payload,
      };
      break;
    case CLEAR_REDUX:
      state = {
        user: null,
      };
      break;

    default:
      break;
  }
  return state;
}
