import {handleActions} from 'redux-actions';
import {ADD_CITY, SET_COORDINATES, SET_LAST_UPDATE, SET_WEATHER, INPUT_CITY} from './MainActions';

export const setCoordinates = (state, {payload}) => {
  return {
    ...state,
    location: payload,
  };
};

export const setLastUpdate = (state, {payload}) => {
  return {
    ...state,
    lastUpdate: payload,
  };
};

export const setWeather = (state, {payload}) => {
  return {
    ...state,
    weather: payload,
    hidden: true,
  };
};

export const addCity = (state, {payload}) => {
  const {
    list
  } = payload;

  if (!list.length) {
    return {
      ...state,
      inputValue: '',
    };
  }

  return {
    ...state,
    inputValue: '',
    city: [
      ...state.city,
      list[0],
    ]
  };
};

export const inputCity = (state, {payload}) => {
  return {
    ...state,
    inputValue: payload,
  };
};

const DEFAULT_STATE = {
  location: {},
  city: [],
  lastUpdate: '',
  weather: {},
  hidden: false,
  inputValue: '',
};

const handlers = {
  [SET_COORDINATES]: setCoordinates,
  [SET_WEATHER]: setWeather,
  [SET_LAST_UPDATE]: setLastUpdate,
  [ADD_CITY]: addCity,
  [INPUT_CITY]: inputCity
};

export default handleActions(handlers, DEFAULT_STATE);