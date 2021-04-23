import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Screen,
  Feedback,
  Container,
  Form,
  Emoji,
  Title,
  Input,
  Footer,
} from './styles';

import Button from '../../components/button';

const data = {
  emoji: '😃',
  emojiFilled: '😄',
  title: 'Como podemos\nchamar você?',
  inputPlaceholder: 'Digite seu nome',
  button: 'Confirmar',
};

const IdentificationScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isInputFilled, setIsInputFilled] = useState<boolean>(false);

  const onInputBlur = () => {
    setIsInputFocused(false);
    setIsInputFilled(!!name);
  };

  const onInputFocus = () => {
    setIsInputFocused(true);
  };

  const onInputChange = (value: string) => {
    setIsInputFilled(!!value);
    setName(value);
  };

  const onPressButton = () => {
    navigation.navigate('ConfirmationScreen');
  };

  return (
    <Screen>
      <Container>
        <Feedback>
          <Form>
            <>
              <Emoji>{isInputFilled ? data.emojiFilled : data.emoji}</Emoji>
              <Title>{data.title}</Title>
              <Input
                placeholder={data.inputPlaceholder}
                onBlur={onInputBlur}
                onFocus={onInputFocus}
                onChangeText={onInputChange}
                isInputValid={isInputFocused || isInputFilled}
              />
            </>
            <Footer>
              <Button
                title={data.button}
                onPress={onPressButton}
                disabled={!isInputFilled}
              />
            </Footer>
          </Form>
        </Feedback>
      </Container>
    </Screen>
  );
};

export default IdentificationScreen;
