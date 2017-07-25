export { blueStops, displayLink, mapboxApiKey, SIMULATE_DISCONNECTED, timeInterval } from './config';
export { deviceProps } from './device';
export { mapboxDistanceAPI, startNavigation } from './helpers';
export { getAnnotations, getStopCallouts } from './mapSetup';
export { distanceTimeConverter, getNextTrainTime, getScheduleDay } from './scheduleCalcs';
export { snapshotStyledComponent, themeStyledComponent } from './testHelpers';
import data from './staticData.json';
export const staticData = data;