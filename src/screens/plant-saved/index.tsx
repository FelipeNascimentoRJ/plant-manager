import React from 'react';
import { Alert } from 'react-native';

import { time } from '../../utils/date';
import Storage from '../../utils/storage';
import Constants from '../../utils/constants';

import { Plant } from '../../services/api';

const data = {
  alertTextPlantLoad: `Não foi possível carregar as plantas. 😭`,
};

const PlantSavedScreen = () => {
  const loadPlants = async () => {
    try {
      const plantsSaved = await Storage.get(
        Constants.STORAGE_PLANTS
      );

      if (!plantsSaved) {
        return [];
      }

      const plants = JSON.parse(plantsSaved);

      const platsSorted = Object
        .keys(plants)
        .map((key: string) => {
          const plant: Plant = plants[key];

          return {
            ...plant,
            hour: time(new Date(plant.dateTimeNotification)),
          };
        })
        .sort((a, b) => {
          const timeA = new Date(a.dateTimeNotification).getTime();
          const timeB = new Date(b.dateTimeNotification).getTime();

          if (timeA > timeB) {
            return 1;
          }

          if (timeA < timeB) {
            return -1;
          }

          return 0;
        });

        return platsSorted;
    } catch (error) {
      Alert.alert(data.alertTextPlantLoad);
    }
  };

  return null;
};

export default PlantSavedScreen;
