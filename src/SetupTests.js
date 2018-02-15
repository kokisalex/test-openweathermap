'use strict';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new Adapter()
});

setLocalStorage();

function setLocalStorage() {
  const localStorageMock = {
    getItem: jest.fn(() => null),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
  };

  global.localStorage = localStorageMock;
}

setNavigator();

function setNavigator() {
  const geoLocationMock = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };

  global.navigator.geolocation = geoLocationMock;
}

setDate();

function setDate() {
  const DATE_TO_USE = new Date('2018-02-02T11:11:11');
  const _Date = Date;
  global.Date = jest.fn(() => DATE_TO_USE);
  global.Date.now = _Date.now;
  global.Date.getHours = _Date.getHours;
}

process.env.REACT_APP_WEATHER = '';