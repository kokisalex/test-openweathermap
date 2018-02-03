import {connect} from 'react-redux';
import MainContainer from './MainContainer';
import {setCoordinatesAction, setLastUpdateAction, setWeatherAction, addCityAction, searchCityAction} from './Redux/MainActions';

export const mapState = (state) => state;

export const mapDispatch = {
  setCoordinates: setCoordinatesAction,
  setWeather: setWeatherAction,
  setLastUpdate: setLastUpdateAction,
  addCity: addCityAction,
  searchCity: searchCityAction,
};

export default connect(mapState, mapDispatch)(MainContainer);