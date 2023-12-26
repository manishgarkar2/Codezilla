// ReactNativeFirebaseMessagingHeadlessTask.js

import messaging from '@react-native-firebase/messaging';

export default async (message) => {
  // Handle the background notification here
  console.log('Background Notification:', message);
};
