import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import useForecast from '../hooks/useForecast';
import { WEATHER_BASE_URL } from '../constants';

test('hooks: useForecast', async () => {
  jest.spyOn(window.localStorage.__proto__, 'setItem');
  window.localStorage.__proto__.setItem = jest.fn();

  axiosMock.get.mockImplementationOnce(() =>
    Promise.resolve({
      status: 200,
      data: { forecast: { '2020-01-01': {} } }
    })
  );
  const { result, waitForNextUpdate } = renderHook(() => useForecast('test'));

  expect(result.current.isLoadingForecoast).toBeTruthy();
  expect(result.current.forecast).toMatchObject({});
  expect(result.current.errorForecastMsg).toBe('');

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(`${WEATHER_BASE_URL}/forecast`, {
    params: {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      forecast_days: 7,
      query: 'test'
    }
  });

  await waitForNextUpdate();

  expect(result.current.isLoadingForecoast).toBe(false);
  expect(result.current.forecast).toMatchObject({ '2020-01-01': {} });

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    'storedForecast',
    JSON.stringify({ '2020-01-01': {} })
  );
});
