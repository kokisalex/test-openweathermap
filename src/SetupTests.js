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
  };

  global.navigator.geolocation = geoLocationMock;
}