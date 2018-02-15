import React from 'react';
import {getWeather, wrap} from '../CoreFunction';
import Main from './Main';
import Loader from '../Loader/LoaderContainer';
import {curry} from 'ramda';

const URL_WEATHER = process.env.REACT_APP_WEATHER;
const URL_SEARCH = process.env.REACT_APP_FIND;

export const getDateHours = () => {
  const today = new Date();
  return today.getHours();
};

export const inputCity = curry((action, {target}) => {
  action(target.value);
});

export const addCity = wrap((action, cityName) => {
  const url = URL_SEARCH + cityName;
  const city = getWeather(url);
  action(city);
});

export const configUrl = ({latitude, longitude}) => {
  return `${URL_WEATHER}&lat=${latitude}&lon=${longitude}`;
};

export const cityMap = curry((item) => (
  <tr key={item.id}>
    <td>{item.name}, {item.sys.country}</td>
    <td>{item.main.temp}</td>
    <td>
      <img className=" align-self-center mr-3"
        src={'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'}
        alt="..."/>
      {item.weather[0].description}
    </td>
  </tr>)
);

export const setLocation = curry((setCoordinates, position) => {
  const {
    latitude,
    longitude,
  } = position.coords;

  setCoordinates({latitude, longitude});
});

export default class MainContainer extends React.Component {
  componentDidMount() {
    const {
      setCoordinates,
    } = this.props;

    navigator.geolocation.getCurrentPosition(setLocation(setCoordinates));
  }

  componentWillReceiveProps(nextProps) {
    const hours = getDateHours();

    const {
      setWeather,
      setLastUpdate,
    } = this.props;

    const {
      lastUpdate,
      location
    } = nextProps;

    const {
      latitude,
      longitude,
    } = location;

    if (lastUpdate === hours || !latitude || !longitude) {
      return;
    }

    const url = configUrl({latitude, longitude});
    const weather = getWeather(url);
    setWeather(weather);
    setLastUpdate(hours);
  }

  render() {
    const parseCity = this.props.city.map(cityMap);

    return (
      <Loader hidden={this.props.hidden}>
        <Main weather={this.props.weather}
          inputCity={inputCity(this.props.searchCity)}
          inputValue={this.props.inputValue}
          addCity={addCity(this.props.addCity, this.props.inputValue)}
          city={parseCity}/>
      </Loader>
    );
  }
}
