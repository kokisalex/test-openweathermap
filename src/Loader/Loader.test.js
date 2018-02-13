import React from 'react';
import {shallow} from 'enzyme';
import Loader from './Loader';

it('Main: without crashing', () => {
  const component = shallow(<Loader/>, {});

  component.render();
});
