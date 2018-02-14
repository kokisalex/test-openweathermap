import React from 'react';
import {shallow} from 'enzyme';
import Main from './Main';

it('Main: without crashing', () => {
  const weather = {
    sys: {
      country: ''
    },
    weather: [
      {icon: ''}
    ],
    main: {
      temp: '',
    }
  };
  const city = [];
  const inputCity = jest.fn();
  const inputValue = '';
  const addCity = jest.fn();

  const component = shallow(<Main
    weather={weather}
    city={city}
    inputCity={inputCity}
    inputValue={inputValue}
    addCity={addCity}
  />, {});

  component.render();
});
