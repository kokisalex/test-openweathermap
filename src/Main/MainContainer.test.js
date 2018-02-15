import React from 'react';
import {shallow, mount} from 'enzyme';
import fetchMock from 'fetch-mock';

import MainContainer, {
  inputCity,
  addCity,
  cityMap,
  configUrl,
  setLocation,
} from './MainContainer';

it('MainContainer: render', () => {
  const lastUpdate = '';
  const setLastUpdate = jest.fn();
  const setCoordinates = jest.fn();
  const city = [];
  const latitude = 'loc';
  const longitude = 'loc';
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
  const city = [{
    id: '1',
    name: 'name',
    main: {
      temp: '12'
    },
    sys: {
      country: 'UA'
    },
    weather: [
      'ico'
    ]
  }];

  const result = city.map(cityMap);

  expect(result.length).toEqual(1);
});

it('MainContainer: configUrl', () => {
  const location = {
    latitude: 4,
    longitude: 2,
  };

  const expected = '&lat=4&lon=2';

  expect(configUrl(location)).toEqual(expected);
});

test('MainContainer: setLocation', () => {
  const setCoordinates = jest.fn();
  const position = {
    coords: {
      latitude: 1,
      longitude: 1,
    }
  };
  setLocation(setCoordinates, position);

  const expected = {
    latitude: 1,
    longitude: 1,
  };

  expect(setCoordinates).toHaveBeenCalledWith(expected);
});

it('MainContainer: next props call setLastUpdate', () => {
  const setLastUpdate = jest.fn();
  const setCoordinates = jest.fn();
  const city = [];

  const setWeather = jest.fn();

  const props = {
    setLastUpdate,
    setWeather,
    city,
    setCoordinates,
  };

  fetchMock.getOnce('&lat=loc&lon=loc', {overwriteRoutes: true});

  const component = shallow(<MainContainer {...props}/>);

  const nextProps = {
    lastUpdate: 3,
    location: {
      latitude: 'loc',
      longitude: 'loc',
    }
  };

  component.setProps(nextProps);

  expect(setLastUpdate).toBeCalledWith(11);
});

it('MainContainer: next props not call setLastUpdate', () => {
  const lastUpdate = '';
  const setLastUpdate = jest.fn();
  const setCoordinates = jest.fn();
  const city = [];

  const setWeather = jest.fn();

  const props = {
    setLastUpdate,
    setWeather,
    city,
    setCoordinates,
  };

  const component = shallow(<MainContainer {...props}/>);

  const nextProps = {
    lastUpdate: 11,
    location: {
      latitude: 'loc',
      longitude: 'loc',
    }
  };

  component.setProps(nextProps);

  expect(setLastUpdate).not.toBeCalled();
});
