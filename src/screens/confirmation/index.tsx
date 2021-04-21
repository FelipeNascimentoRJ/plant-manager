import React from 'react';

import { Screen, Container, Emoji, Title, Description, Footer } from './styled';

import Button from '../../components/button';

const data = {
  emoji: '😄',
  title: 'Prontinho',
  description: 'Agora vamos começar a cuidar das\nsuas plantinhas com muito cuidado.',
  button: 'Começar',
};

const ConfirmationScreen = () => {
  const onPressButton = () => {
    console.log('onPressButton');
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
