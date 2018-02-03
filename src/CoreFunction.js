import {
  compose,
  unapply,
  partial,
} from 'ramda';

export const toJson = (res) => res.json();

export const checkResponse = (res) => {
  if (res.status !== 200) {
    throw res.statusText;
  }
  return res;
};

export const getWeather = (url) => {
  return fetch(url, {
    headers: new Headers()
  })
    .then(checkResponse)
    .then(toJson);
};

export const wrap = compose(unapply, partial);