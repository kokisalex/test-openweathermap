import {
  setCoordinates,
  setLastUpdate,
  setWeather,
  addCity,
  inputCity,
} from './MainReducer';

it('MainReducer: setCoordinates', () => {
  const state = {};
  const payload = 'hello';

  const expected = {
    location: 'hello',
  };

  expect(setCoordinates(state, {payload})).toEqual(expected);
});

it('MainReducer: setLastUpdate', () => {
  const state = {};
  const payload = 'hello';

  const expected = {
    lastUpdate: 'hello',
  };

  expect(setLastUpdate(state, {payload})).toEqual(expected);
});

it('MainReducer: setWeather', () => {
  const state = {};
  const payload = 'hello';

  const expected = {
    weather: 'hello',
    hidden: true,
  };

  expect(setWeather(state, {payload})).toEqual(expected);
});

it('MainReducer: addCity', () => {
  const list = [
    'Kyiv',
  ];
  const state = {
    city: [],
  };
  const payload = {
    list,
  };

  const expected = {
    city: ['Kyiv'],
    inputValue: '',
  };

  expect(addCity(state, {payload})).toEqual(expected);
});

it('MainReducer: addCity no city', () => {
  const list = [];
  const state = {
    city: [
      'Kyiv',
    ],
  };
  const payload = {
    list,
  };

  const expected = {
    city: ['Kyiv'],
    inputValue: '',
  };

  expect(addCity(state, {payload})).toEqual(expected);
});

it('MainReducer: inputCity', () => {
  const state = {};
  const payload = 'kk';

  const expected = {
    inputValue: 'kk',
  };

  expect(inputCity(state, {payload})).toEqual(expected);
});