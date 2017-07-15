import { Linking } from 'react-native';

export const startNavigation = (mode, latlng) => {
  const { latitude, longitude } = latlng;

  const googleMapsURL = `comgooglemaps://?daddr=${latitude},${longitude}&directionsmode=${mode}`;
  const appleMapsURL = `http://maps.apple.com?daddr=${latitude},${longitude}&dirflg=${mode}`;

  Linking.canOpenURL(googleMapsURL)
    .then((supported) => {
      if (supported) {
        Linking
          .openURL(googleMapsURL)
          .catch(err => console.error('Either Google Maps is not installed or some other error occurred: ', err));
      } else {
        Linking
          .openURL(appleMapsURL)
          .catch(err => console.error('An error occurred: ', err));
      }
    });
};