import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {
  Screen,
  Container,
  HeaderContainer,
  TipContainer,
  TipImage,
  TipText,
  PlantsCardSecondaryContainer,
  PlantsCardSecondaryTitle,
  PlantsCardSecondaryList,
} from './styles';

import Storage from '../../utils/storage';
import Constants from '../../utils/constants';
import { distance, time } from '../../utils/date';

import { Plant } from '../../services/api';

import Load from '../../components/load';
import Header from '../../components/header';
import PlantCardSecondary from '../../components/plant-card-secondary';

import waterDrop from '../../assets/waterdrop.png';

const data = {
  plantsCardSecondaryTitle: 'Próximas regadas',
  alertTextPlantLoad: `Não foi possível carregar as plantas. 😭`,
};

const PlantSavedScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [plants, setPlants] = useState<Array<Plant>>([]);
  const [nextWaterd, setNextWaterd] = useState<string>();

  useEffect(() => {
    loadPlants();
  }, []);

  const loadPlants = async () => {
    setLoading(true);

    try {
      const plantsSaved = await Storage.get(
        Constants.STORAGE_PLANTS
      );

      if (!plantsSaved) {
        return [];
      }

      const plants = JSON.parse(plantsSaved);

      const plantsMap = (key: string) => {
        const plant: Plant = plants[key];

        return {
          ...plant,
          hour: time(new Date(plant.dateTimeNotification)),
        };
      };

      const plantsSort = (a: Plant, b: Plant) => {
        const timeA = new Date(a.dateTimeNotification).getTime();
        const timeB = new Date(b.dateTimeNotification).getTime();

        if (timeA > timeB) {
          return 1;
        }

        if (timeA < timeB) {
          return -1;
        }

        return 0;
      };

      const plantsSorted = Object
        .keys(plants)
        .map(plantsMap)
        .sort(plantsSort);

      setPlants(plantsSorted);

      const [plant] = plantsSorted;
      const nextDistance = distance(plant.dateTimeNotification)
      const nextMessage = `Não esqueça de regar a ${plant.name} em ${nextDistance}`;

      setNextWaterd(nextMessage);
    } catch (error) {
      Alert.alert(data.alertTextPlantLoad);
    }

    setLoading(false);
  };

  type PlantsCardSecondaryListItem = {
    item: Plant;
  };

  const renderPlantCard = ({ item }: PlantsCardSecondaryListItem) => {
    const { name, photo, hour } = item;

    return (
      <PlantCardSecondary
        name={name}
        photo={photo}
        hour={hour}
      />
    );
  }

  if (loading) {
    return <Load />;
  }

  return (
    <Screen>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <TipContainer>
          <TipImage source={waterDrop} />
          <TipText>{nextWaterd}</TipText>
        </TipContainer>
        <PlantsCardSecondaryContainer>
          <PlantsCardSecondaryTitle>
            {data.plantsCardSecondaryTitle}
          </PlantsCardSecondaryTitle>
          <PlantsCardSecondaryList
            data={plants}
            renderItem={renderPlantCard}
            keyExtractor={(item: Plant) => `${item.id}-${item.name}`}
          />
        </PlantsCardSecondaryContainer>
      </Container>
    </Screen>
  );
};

export default PlantSavedScreen;
