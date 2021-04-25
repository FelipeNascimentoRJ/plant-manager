import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import {
  Screen,
  Container,
  Emoji,
  Title,
  Description,
  Footer
} from './styled';

import Button from '../../components/button';

export interface RouteParams {
  icon: 'smile' | 'hug';
  title: string;
  description: string;
  buttonTitle: string;
  nextScreen: string;
}

const emojis = {
  smile: '😄',
  hug: '🤗',
};

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    icon,
    title,
    description,
    buttonTitle,
    nextScreen,
  } = route.params as RouteParams;

  const onPressButton = () => {
    navigation.navigate(nextScreen);
  };

  return (
    <Screen>
      <Container>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Footer>
            <Button
              title={buttonTitle}
              onPress={onPressButton}
            />
          </Footer>
      </Container>
    </Screen>
  );
};

export default ConfirmationScreen;
