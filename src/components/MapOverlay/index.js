import { Platform } from 'react-native';
import { default as IOS } from './MapOverlay.ios';
import { default as ANDROID } from './MapOverlay.android';

const exportedComponent = Platform.OS === 'ios' ? IOS : ANDROID;
export default exportedComponent;
