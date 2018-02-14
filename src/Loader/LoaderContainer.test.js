import React from 'react';
import View, {startProgress, setProgress} from './LoaderContainer';
import {shallow} from 'enzyme';


it('LoaderContainer: start progress call setTimeout', () => {
  jest.useFakeTimers();
  const i = 500;
  const p = 0;
  const h = false;
  const setState = jest.fn();

  startProgress(i, p, h, setState);

  expect(setTimeout).toHaveBeenCalledTimes(1);
});

it('LoaderContainer: start progress call setTimeout', () => {
  jest.useFakeTimers();
  const i = 500;
  const p = 0;
  const h = false;
  const setState = jest.fn();

  startProgress(i, p, h, setState);

  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
});

it('LoaderContainer: start progress call setState', () => {
  const i = 500;
  const p = 0;
  const h = true;
  const setState = jest.fn();

  startProgress(i, p, h, setState);
  jest.runTimersToTime(500);

  expect(setState.mock.calls.length).toBe(1);
  const firstCall = setState.mock.calls[0];
  const firstCallArg = firstCall[0];
  expect(firstCallArg).toEqual({progress: 10});
});

it('LoaderContainer: without crashing', () => {
  const component = shallow(<View/>, {});

  component.render();
});

it('LoaderContainer: re render component', () => {
  const component = shallow(<View hidden={true}/>, {});

  component.update();
});

it('LoaderContainer: set progress 0', () => {
  const p = 0;
  const progress = setProgress(p);
  expect(progress).toEqual(10);
});

it('LoaderContainer: set progress 20', () => {
  const p = 20;
  const progress = setProgress(p);
  expect(progress).toEqual(30);
});

it('LoaderContainer: set progress 10', () => {
  const p = 100;
  const progress = setProgress(p);
  expect(progress).toEqual(10);
});
