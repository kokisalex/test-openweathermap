import {
  getDevTools,
  slicer,
} from './Reducer';

it('slicer', () => {
  const store = {
    location: {},
    city: '',
  };

  const expected = {
    location: {},
    city: '',
  };
  expect(slicer()(store)).toEqual(expected);
});


it('getDevTools', () => {
  const {
    __REDUX_DEVTOOLS_EXTENSION__
  } = window;

  const fn = jest.fn();

  window.__REDUX_DEVTOOLS_EXTENSION__= fn;

  getDevTools();
  expect(fn).toBeCalledWith();

  window.__REDUX_DEVTOOLS_EXTENSION__ = __REDUX_DEVTOOLS_EXTENSION__;
});