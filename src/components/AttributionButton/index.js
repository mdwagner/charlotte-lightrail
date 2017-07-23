import { Platform } from 'react-native';
import { default as IOS } from './AttributionButton.ios';
import { default as ANDROID } from './AttributionButton.android';

const exportedComponent = Platform.OS === 'ios' ? IOS : ANDROID;
export default exportedComponent;