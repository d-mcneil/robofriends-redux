import { combineReducers } from "redux";
import {
  SET_SEARCHFIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

const initialStateSearchfield = {
  searchfield: "",
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const searchRobots = (state = initialStateSearchfield, action = {}) => {
  switch (action.type) {
    case SET_SEARCHFIELD:
      return { ...state, searchfield: action.payload };
    // return Object.assign({}, state, { searchfield: action.payload });
    default:
      return state;
  }
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    // return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    //   return Object.assign({}, state, {
    //     robots: action.payload,
    //     isPending: false,
    //   });
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    //   return Object.assign({}, state, {
    //     error: action.payload,
    //     isPending: false,
    //   });
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ searchRobots, requestRobots });
