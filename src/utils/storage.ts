import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  static async set(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  static async get(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key);
  }

  static async del(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}