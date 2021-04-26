import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

import Notifications, {
  NotificationResponseType,
  NotificationType,
} from './src/utils/notification';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  const received = (event: NotificationType) => {
    const { plant } = event.request.content.data;
    console.log('Received Notification', plant);
  };

  const response = (event: NotificationResponseType) => {
    const { plant } = event.notification.request.content.data;
    console.log('Response Notification', plant);
  };

  const subscriptionNotifications = () => {
    const subscriptionReceived = Notifications.received(received);
    const subscriptionResponse = Notifications.response(response);

    return {
      remove: () => {
        subscriptionReceived.remove();
        subscriptionResponse.remove();
      },
    };
  };

  useEffect(() => {
    const subscription = subscriptionNotifications();

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;
