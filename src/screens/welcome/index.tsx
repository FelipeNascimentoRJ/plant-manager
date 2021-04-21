import React from 'react';

import {
  Screen,
  Container,
  Title,
  Image,
  Description,
  Button,
  ButtonIcon,
} from './styles';

import wateringImg from '../../assets/watering.png';

const data = {
  title: `Gerencie\nsuas plantas de\nforma fácil`,
  description: `Não esqueça mais de regar suas plantas.\nNós cuidamos de lembrar você\nsempre que precisar.`,
};

const WelcomeScreen = () => {
  const onPressButton = () => {
    console.log('onPressButton');
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