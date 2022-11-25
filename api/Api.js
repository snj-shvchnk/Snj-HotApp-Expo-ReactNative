const API_KEY = '2IK0feY63w7ZcA2xgpTQGTFouGzqQmpZ';
const API_HOST = 'http://dataservice.accuweather.com/';
const API_VERSION = 'v1';

const LocationApiUrl = (param, group) => `${API_HOST}locations/${API_VERSION}/${param}/${group}?apikey=${API_KEY}`;

const WeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/1day/${key}?apikey=${API_KEY}`;

export default function getLocations() {
  return fetch(LocationApiUrl('topcities', 50)).then(response => response.json());
}
export function getWeather(key) {
  return fetch(WeatherApiUrl(key))
    .then(response => response.json());
}