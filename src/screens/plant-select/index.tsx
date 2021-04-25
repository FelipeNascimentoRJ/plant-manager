import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Screen,
  Container,
  Content,
  HeaderContainer,
  Title,
  Subtitle,
  EnvironmentList,
  PlantsCardPrimaryList,
  PlantsCardPrimaryListLoading,
} from './styles';

import Load from '../../components/load';
import Header from '../../components/header';
import Environment from '../../components/environment';
import PlantCardPrimary from '../../components/plant-card-primary';

import Api, { PlantEnvironment, Plant } from '../../services/api';

const data = {
  title: 'Em qual ambiente',
  subtitle: 'você quer colocar sua planta?',
};

const PlantSelectScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [environmentSelected, setEnvironmentSelected] = useState<string>('all');
  const [environments, setEnvironments] = useState<Array<PlantEnvironment>>([]);

  const [plants, setPlants] = useState<Array<Plant>>([]);
  const [pagination, setPagination] = useState<number>(1);

  const loadPlantsEnvironments = async () => {
    try {
      const response = await Api.getPlantsEnvironments();

      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...response.data
      ]);
    } catch (error) {
      console.log('Error', error.message);
      setEnvironments([]);
    }
  };

  const loadPlants = async () => {
    try {
      const response = await Api.getPlants(pagination);

      if (!response.data) {
        return setLoading(true);
      }

      if (pagination > 1) {
        setPlants(oldValue => [...oldValue, ...response.data]);
      } else {
        setPlants(response.data);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.log('Error', error.message);
      setPlants([]);
    }
  };

  const loadAll = () => {
    setLoading(true);

    Promise.all([
      loadPlantsEnvironments(),
      loadPlants(),
    ])
    .finally(() => {
      setLoading(false)
    });
  };

  const lopadMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPagination(oldValue => oldValue + 1);
    loadPlants();
  };

  useEffect(() => {
    loadAll();
  }, []);

  type EnvironmentListItem = {
    item: PlantEnvironment;
  };

  const renderEnvironment = ({ item }: EnvironmentListItem) => {
    const { key, title } = item;

    const onPress = () => {
      setEnvironmentSelected(key);
    };

    return (
      <Environment
        title={title}
        active={key === environmentSelected}
        onPress={onPress}
      />
    );
  }

  type PlantsCardPrimaryListItem = {
    item: Plant;
  };

  const renderPlantCard = ({ item }: PlantsCardPrimaryListItem) => {
    const { name, photo } = item;

    const onPress = () => {
      navigation.navigate('PlantSaveScreen', { plant: item });
    };

    return (
      <PlantCardPrimary
        name={name}
        photo={photo}
        onPress={onPress}
      />
    );
  }

  type EndReachedProps = { distanceFromEnd: number };

  const onEndReached = ({ distanceFromEnd }: EndReachedProps) => {
    lopadMore(distanceFromEnd);
  };

  const filterPlants = (({ environments }: Plant) => {
    return environments.some((environment) => environment === environmentSelected);
  });

  if (loading) {
    return <Load />;
  }

  return (
    <Screen>
      <Container>
        <Content>
          <HeaderContainer>
            <Header />
            <Title>{data.title}</Title>
            <Subtitle>{data.subtitle}</Subtitle>
          </HeaderContainer>
          <EnvironmentList
            data={environments}
            renderItem={renderEnvironment}
            keyExtractor={(item: PlantEnvironment) => `${item.key}`}
          />
        </Content>
        <PlantsCardPrimaryList
          data={environmentSelected !== 'all' ? plants.filter(filterPlants) : plants}
          renderItem={renderPlantCard}
          keyExtractor={(item: Plant) => `${item.id}-${item.name}`}
          onEndReachedThreshold={0.1}
          onEndReached={onEndReached}
          ListFooterComponent={loadingMore && <PlantsCardPrimaryListLoading />}
        />
      </Container>
    </Screen>
  );
};

export default PlantSelectScreen;
