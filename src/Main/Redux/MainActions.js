import {createAction} from 'redux-actions';

export const SET_COORDINATES = 'setCoordinates';
export const SET_WEATHER = 'setWeather';
export const SET_LAST_UPDATE = 'setLastUpdate';
export const ADD_CITY = 'addCity';
export const INPUT_CITY = 'searchCity';

export const setCoordinatesAction = createAction(SET_COORDINATES);
export const setWeatherAction = createAction(SET_WEATHER);
export const setLastUpdateAction = createAction(SET_LAST_UPDATE);
export const addCityAction = createAction(ADD_CITY);
export const searchCityAction = createAction(INPUT_CITY);