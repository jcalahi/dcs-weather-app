export const WEATHER_BASE_URL = 'https://api.weatherstack.com';
export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
export const ACTION_TYPES = {
  SEARCH_RESULT: 'SEARCH_RESULT',
  SET_WEATHER_CURRENT: 'SET_WEATHER_CURRENT',
  SET_WEATHER_FORECAST: 'SET_WEATHER_FORECAST',
  ADD_CITIES: 'ADD_CITIES',
  REMOVE_CITY: 'REMOVE_CITY',
  TOGGLE_FAVORITES: 'TOGGLE_FAVORITES',
  LOADING_CITIES: 'LOADING_CITIES',
  LOADING_WEATHER: 'LOADING_WEATHER',
  ADD_NOTE: 'ADD_NOTE',
  REMOVE_NOTE: 'REMOVE_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  RESET_WEATHER: 'RESET_WEATHER'
};
export const breakpoints = {
  xxs: '320px',
  xs: '480',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1600px'
};
