import React from 'react';
import {shallow, mount} from 'enzyme';
import fetchMock from 'fetch-mock';

import MainContainer, {
  inputCity,
  addCity,
  cityMap,
  configUrl,
} from './MainContainer';

it('MainContainer: render', () => {
  const lastUpdate = '';
  const setLastUpdate = jest.fn();
  const setCoordinates = jest.fn();
  const city = [];
  const latitude = 'loc';
  const longitude = 'loc';
  const setWeather = jest.fn(() => Promise.resolve());
  const location = {
    latitude,
    longitude,
  };

  const props = {
    setLastUpdate,
    lastUpdate,
    setWeather,
    city,
    location,
    setCoordinates,
  };
  const component = shallow(<MainContainer {...props}/>);

  component.render();
});

it('MainContainer: inputCity', () => {
  const action = jest.fn();
  const event = {
    target: {
      value: '111'
    }
  };

  inputCity(action, event);

  expect(action).toHaveBeenCalledWith('111');
});

it('MainContainer: addCity', async () => {
  const action = jest.fn();
  const cityName = 'hello';

  fetchMock.getOnce('*', {});

  addCity(action, cityName)();

  expect(action).toHaveBeenCalled();
});

it('MainContainer: cityMap', () => {
  const city = [];

  const result = city.map(cityMap);

  expect(result.length).toEqual(0);
});

it('MainContainer: configUrl', () => {
  const location = {
    latitude: 4,
    longitude: 2,
  };

  const expected = '&lat=4&lon=2';

  expect(configUrl(location)).toEqual(expected);
});

test(`MainContainer: componentDidMount: set location`, () => {
  const lastUpdate = '';
  const setLastUpdate = jest.fn();
  const setCoordinates = jest.fn();
  const city = [];
  const latitude = '';
  const longitude = '';
  const setWeather = jest.fn();
  const location = {
    latitude,
    longitude,
  };

  const props = {
    setLastUpdate,
    lastUpdate,
    setWeather,
    city,
    location,
    setCoordinates,
  };

  mount(
    <MainContainer {...props} />
  );

  expect(setCoordinates).toHaveBeenCalledWith({l: 0, d: 3});
});
