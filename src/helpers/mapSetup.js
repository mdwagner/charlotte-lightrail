import { blueStops } from './config';
import { getNextTrainTime } from './scheduleCalcs';

export const getAnnotations = () =>
  blueStops.map((stop, index) => ({
    coordinates: [stop.latlng.latitude, stop.latlng.longitude],
    type: 'point',
    title: stop.mapLabel,
    annotationImage: {
      source: {
        uri: 'blueMarker'
      },
      height: 32,
      width: 32
    },
    id: `marker-${index}`
  }));

export const getStopCallouts = () => {
  const stopCallouts = {};
  blueStops.forEach((stop, index) => {
    const nextInbound = getNextTrainTime('inbound', index);
    const nextOutbound = getNextTrainTime('outbound', index);
    stopCallouts[`stopCallout${index}`] = {
      durationText: null,
      inbound: nextInbound,
      outbound: nextOutbound
    };
  });
  return stopCallouts;
};
