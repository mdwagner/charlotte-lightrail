import { mapboxApiKey } from './config';

export const mapboxDistanceAPI = {
  async getDistance(origin, destinations, mode) {
    const coordinates = destinations;
    coordinates.unshift(origin);

    if (__DEV__) {
      const endpoint = `directions-matrix/v1/mapbox/${mode}`;
      const coordinatesString = coordinates.map(coordinate => coordinate.toString());
      const coordinatesQuery = coordinatesString.join(';');
      const url = `https://api.mapbox.com/${endpoint}/${coordinatesQuery}?access_token=${mapboxApiKey}`;
      const response = await fetch(url);
      return response.json();
    }

    const endpoint = `distances/v1/mapbox/${mode}`;
    const url = `https://api.mapbox.com/${endpoint}?access_token=${mapboxApiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinates
      })
    });
    return response.json();
  }
};
