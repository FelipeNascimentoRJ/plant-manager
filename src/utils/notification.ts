import * as ExpoNotifications from 'expo-notifications';

import { Plant } from '../services/api';

export enum PermissionStatus {
  GRANTED = "granted",
  UNDETERMINED = "undetermined",
  DENIED = "denied"
}

export type NotificationType = ExpoNotifications.Notification;
export type NotificationResponseType = ExpoNotifications.NotificationResponse;

export default class Notifications {
  static async requestPermissions(): Promise<PermissionStatus> {
    const { status } = await ExpoNotifications
      .requestPermissionsAsync();

    return status;
  }

  static async schedule(plant: Plant, seconds: number): Promise<string> {
    const notificationId = await ExpoNotifications
      .scheduleNotificationAsync({
        content: {
          title: 'Heeey, 🌱',
          body: `Está na hora de cuidar da sua ${plant.name}`,
          sound: true,
          priority: ExpoNotifications.AndroidNotificationPriority.HIGH,
          data: {
            plant,
          },
        },
        trigger: {
          seconds: seconds < 60 ? 60 : seconds,
          repeats: true,
        }
    });

    return notificationId;
  }

  static received(listener: (event: NotificationType) => void) {
    return ExpoNotifications.addNotificationReceivedListener(listener);
  }

  static response(listener: (event: NotificationResponseType) => void) {
    return ExpoNotifications.addNotificationResponseReceivedListener(listener);
  }

  static async cancel(notificationId: string) {
    await ExpoNotifications.cancelScheduledNotificationAsync(
      notificationId
    );
  };
}