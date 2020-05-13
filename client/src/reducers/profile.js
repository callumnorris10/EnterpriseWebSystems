import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from "../actions/constants";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROFILE:
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null, //add this to prevent the loaded profile persisting after viewing a profile
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}
