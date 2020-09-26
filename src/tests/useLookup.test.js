import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import useLookup from '../hooks/useLookup';
import { WEATHER_BASE_URL } from '../constants';

test('hooks: useLookup', async () => {
  axiosMock.get.mockImplementationOnce(() =>
    Promise.resolve({
      status: 200,
      data: { results: [{ name: 'Manila' }] }
    })
  );
  const mockResponse = [{ name: 'Manila' }];
  const { result, waitForNextUpdate } = renderHook(() => useLookup());

  expect(result.current.isLookingUp).toBeFalsy();
  expect(result.current.results).toEqual([]);

  act(() => {
    result.current.lookup();
  });

  expect(result.current.isLookingUp).toBe(true);
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(
    `${WEATHER_BASE_URL}/autocomplete`,
    {
      params: {
        access_key: process.env.REACT_APP_WEATHER_API_KEY,
        query: undefined
      }
    }
  );

  await waitForNextUpdate();

  expect(result.current.isLookingUp).toBe(false);
  expect(result.current.results).toMatchObject(mockResponse);
});
