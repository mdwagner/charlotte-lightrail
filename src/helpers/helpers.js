import { Linking } from 'react-native';
import { mapboxApiKey } from './config';

export const startNavigation = async (mode, latlng) => {
  const { latitude, longitude } = latlng;

  const googleMapsURL = `comgooglemaps://?daddr=${latitude},${longitude}&directionsmode=${mode}`;
  const appleMapsURL = `http://maps.apple.com?daddr=${latitude},${longitude}&dirflg=${mode}`;

  const supported = await Linking.canOpenURL(googleMapsURL);
  if (supported) {
    Linking
      .openURL(googleMapsURL)
      .catch(err => console.error('Either Google Maps is not installed or some other error occurred: ', err));
  } else {
    Linking
      .openURL(appleMapsURL)
      .catch(err => console.error('An error occurred: ', err));
  }
};

export const mapboxDistanceAPI = {
  async getDistance(origin, destinations, mode) {
    const coordinates = destinations;
    coordinates.unshift(origin);

    if (__DEV__) {
      const endpoint = `directions-matrix/v1/mapbox/${mode}`;
      coordinates_string = coordinates.map(coordinate => {
        return coordinate.toString();
      });
      coordinates_query = coordinates_string.join(';');
      const url = `https://api.mapbox.com/${endpoint}/${coordinates_query}?access_token=${mapboxApiKey}`;
      const res = await fetch(url);
      return res.json();
    } else {
      const endpoint = `distances/v1/mapbox/${mode}`;
      const url = `https://api.mapbox.com/${endpoint}?access_token=${mapboxApiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coordinates,
        }),
      });
      return res.json();
    }
  },
};