import React, { useReducer } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import { reducer, initialState } from '../context/WeatherContext';
import { ACTION_TYPES } from '../constants';

test('reducer: WeatherContextReducer ACTION_TYPES.SEARCH_RESULT', () => {
  const mock = [{ current: {}, location: {} }];
  const updatedState = reducer(initialState, {
    type: ACTION_TYPES.SEARCH_RESULT,
    weather: mock
  });
  expect(updatedState.searchResult).toMatchObject(mock);
});

test('reducer: WeatherContextReducer ACTION_TYPES.SET_WEATHER_CURRENT', () => {
  const mock = [{ current: {}, location: {} }];
  const updatedState = reducer(initialState, {
    type: ACTION_TYPES.SET_WEATHER_CURRENT,
    weather: mock
  });
  expect(updatedState.weather).toMatchObject(mock);
});

test('reducer: WeatherContextReducer ACTION_TYPES.ADD_CITIES', () => {
  const mock = [{ current: {}, location: {}, rank: 1 }];
  const updatedState = reducer(initialState, {
    type: ACTION_TYPES.ADD_CITIES,
    cities: mock
  });
  expect(updatedState.cities[0]).toMatchObject(mock[0]);
});

test('reducer: WeatherContextReducer ACTION_TYPES.REMOVE_CITY', () => {
  const mockState = {
    cities: [{ name: 'one' }, { name: 'two' }]
  };
  const updatedState = reducer(mockState, {
    type: ACTION_TYPES.REMOVE_CITY,
    cityIdx: 0
  });
  expect(updatedState.cities[0]).toMatchObject({ name: 'two' });
});

test('reducer: WeatherContextReducer ACTION_TYPES.TOGGLE_FAVORITES', () => {
  const mockState = {
    ...initialState,
    favorites: [
      {
        location: {
          name: 'city name'
        }
      }
    ]
  };
  // remove favorite
  const updatedState = reducer(mockState, {
    type: ACTION_TYPES.TOGGLE_FAVORITES,
    weather: { location: { name: 'city name' } }
  });
  expect(updatedState.favorites.length).toBeLessThanOrEqual(0);
  // add favorite
  const anotherState = reducer(updatedState, {
    type: ACTION_TYPES.TOGGLE_FAVORITES,
    weather: { location: { name: 'new favorite' } }
  });
  expect(anotherState.favorites.length).toEqual(1);
});

test('reducer: WeatherContextReducer ACTION_TYPES.LOADING_CITIES', () => {
  const updatedState = reducer(initialState, {
    type: ACTION_TYPES.LOADING_CITIES,
    loading: true
  });
  expect(updatedState.loadingCities).toBeTruthy();
});

test('reducer: WeatherContextReducer ACTION_TYPES.LOADING_WEATHER', () => {
  const updatedState = reducer(initialState, {
    type: ACTION_TYPES.LOADING_WEATHER,
    loading: true
  });
  expect(updatedState.loadingWeather).toBeTruthy();
});

test('reducer: WeatherContextReducer ACTION_TYPES.ADD_NOTE', () => {
  const updatedState = reducer(initialState, {
    type: ACTION_TYPES.ADD_NOTE,
    payload: { note: 'new note' }
  });
  expect(updatedState.notes[0].note).toMatch('new note');
});

test('reducer: WeatherContextReducer ACTION_TYPES.REMOVE_NOTE', () => {
  const mockState = {
    notes: [{ id: 'two' }, { id: 'zero' }, { id: 'one' }]
  };
  const updatedState = reducer(mockState, {
    type: ACTION_TYPES.REMOVE_NOTE,
    payload: { id: 'one' }
  });
  expect(updatedState.notes.length).toEqual(2);
});

test('reducer: WeatherContextReducer ACTION_TYPES.EDIT_NOTE', () => {
  const mockState = {
    notes: [
      { id: 'two', note: 'abc' },
      { id: 'zero', note: 'def' },
      { id: 'one', note: 'ghi' }
    ]
  };
  const updatedState = reducer(mockState, {
    type: ACTION_TYPES.EDIT_NOTE,
    payload: { id: 'zero', note: 'mmm' }
  });
  expect(updatedState.notes[1]).toMatchObject({ id: 'zero', note: 'mmm' });
});
