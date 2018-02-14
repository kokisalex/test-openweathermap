import fetchMock from 'fetch-mock';
import {
  checkResponse,
  wrap,
  getWeather,
} from './CoreFunction';


it('checkResponse: error', () => {
  const res = {
    status: 404,
    statusText: 'error code'
  };

  const e = 'error code';

  const result = () => checkResponse(res);

  expect(result).toThrowError(e);
});

it('checkResponse: error', () => {
  const res = {
    status: 200,
    key: 'value'
  };

  expect(checkResponse(res)).toEqual(res);
});

it('wrap', () => {
  const value = 'hello';
  const f = wrap((a) => a);

  const g = f(value);

  expect(g()).toEqual(value);
});

it('getWeather', async () => {
  const expected = {
    hello: 'world'
  };

  fetchMock.getOnce('*', expected);

  const result = await getWeather('//api.com', expected);
  expect(result).toEqual(expected);
});