import React from 'react';
import {getWeather, wrap} from '../CoreFunction';
import Main from './Main';
import Loader from '../Loader/LoaderContainer';
import {curry} from 'ramda';


const URL_WEATHER = process.env.REACT_APP_WEATHER;
const URL_SEARCH = process.env.REACT_APP_FIND;

export const inputCity = curry((action, {target}) => {
  action(target.value);
});

export const addCity = wrap((action, cityName) => {
  const url = URL_SEARCH + cityName;
  const city = getWeather(url);
  action(city);
});


export default class MainContainer extends React.Component {
  componentDidMount() {
    const {
      setCoordinates,
    } = this.props;

    navigator.geolocation.getCurrentPosition(position => {
      const {
        latitude,
        longitude,
      } = position.coords;

      setCoordinates({latitude, longitude});
    });
  }

  componentWillReceiveProps(nextProps) {
    const today = new Date();
    const hours = today.getHours();
    const {
      setWeather,
      lastUpdate,
      setLastUpdate,
    } = this.props;

    const {
      latitude,
      longitude,
    } = nextProps.location;

    if (lastUpdate === hours || !latitude || !longitude) {
      return;
    }
    const url = `${URL_WEATHER}&lat=${latitude}&lon=${longitude}`;
    const weather = getWeather(url);
    setWeather(weather);
    setLastUpdate(hours);
  }

  render() {
    return (
      <Loader hidden={this.props.hidden}>
        <Main weather={this.props.weather}
          inputCity={inputCity(this.props.searchCity)}
          inputValue={this.props.inputValue}
          addCity={addCity(this.props.addCity, this.props.inputValue)}
          city={this.props.city}/>
      </Loader>
    );
  }
}
