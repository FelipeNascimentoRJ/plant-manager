import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Screen, Container, Emoji, Title, Description, Footer } from './styled';

import Button from '../../components/button';

const data = {
  emoji: '😄',
  title: 'Prontinho',
  description: 'Agora vamos começar a cuidar das\nsuas plantinhas com muito cuidado.',
  button: 'Começar',
};

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate('PlantSelectScreen');
  };

  return (
    <Screen>
      <Container>
        <Emoji>{data.emoji}</Emoji>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Footer>
            <Button
              title={data.button}
              onPress={onPressButton}
            />
          </Footer>
      </Container>
    </Screen>
  );
};

export default ConfirmationScreen;
