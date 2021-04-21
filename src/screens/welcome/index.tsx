import React from 'react';

import {
  Container,
  Title,
  Image,
  Description,
  Button,
  ButtonLabel
} from './styles';

import wateringImg from '../../assets/watering.png';

const data = {
  title: `Gerencie\nsuas plantas\nde forma fácil`,
  description: `Não esqueça mais de regar suas plantas.\nNós cuidamos de lembrar você\nsempre que precisar.`,
};

const WelcomeScreen = () => {
  const onPressButton = () => {
    console.log('onPressButton');
  };

  return (
    <Container>
      <Title>{data.title}</Title>
      <Image source={wateringImg} />
      <Description>{data.description}</Description>
      <Button
        onPress={onPressButton}
        activeOpacity={0.7}
      >
        <ButtonLabel>{'>'}</ButtonLabel>
      </Button>
    </Container>
  );
};

export default WelcomeScreen;