import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Screen,
  Container,
  Title,
  Image,
  Description,
  Button,
  ButtonIcon,
} from './styles';

import Storage from '../../utils/storage';
import Constants from '../../utils/constants';
import Notifications from '../../utils/notification';
import wateringImg from '../../assets/watering.png';

const data = {
  title: `Gerencie\nsuas plantas de\nforma fácil`,
  description: `Não esqueça mais de regar suas plantas.\nNós cuidamos de lembrar você\nsempre que precisar.`,
};

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const loadUserName = async () => {
    const stored = await Storage.get(Constants.STORAGE_USER);

    if (stored) {
      navigation.navigate('PlantSelectScreen');
    }
  };

  useEffect(() => {
    loadUserName();
    Notifications.requestPermissions();
  }, []);

  const onPressButton = () => {
    navigation.navigate('IdentificationScreen');
  };

  return (
    <Screen>
      <Container>
        <Title>{data.title}</Title>
        <Image source={wateringImg} />
        <Description>{data.description}</Description>
        <Button
          onPress={onPressButton}
          activeOpacity={0.7}
        >
          <ButtonIcon />
        </Button>
      </Container>
    </Screen>
  );
};

export default WelcomeScreen;