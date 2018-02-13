import {
  checkResponse,
  wrap,
} from './CoreFunction';

it('checkResponse', () => {
  const res = {};

  expect(checkResponse(res))
});

it('wrap', () => {
  const value = 'hello';
  const f = wrap((a) => a);

  const g = f(value);

  expect(g()).toEqual(value);
});
