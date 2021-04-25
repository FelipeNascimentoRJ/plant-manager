import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';

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

import Storage from '../../utils/storage';
import Constants from '../../utils/constants';

import Button from '../../components/button';

const data = {
  emoji: '😃',
  emojiFilled: '😄',
  title: 'Como podemos\nchamar você?',
  inputPlaceholder: 'Digite seu nome',
  button: 'Confirmar',
  alertTextUserSave: 'Não foi possível salvar seu nome. 😭',
};

const IdentificationScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>('');
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

  const onPressButton = async () => {
    try {
      await Storage.set(Constants.STORAGE_USER, JSON.stringify({ name, image: '' }));

      const params = {
        icon: 'smile',
        title: 'Prontinho',
        description: 'Agora vamos começar a cuidar das\nsuas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        nextScreen: 'PlantSelectScreen',
      };

      navigation.navigate('ConfirmationScreen', params);
    } catch (error) {
      Alert.alert(data.alertTextUserSave);
    }
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
                disabled={!isInputFilled || name.length < 3}
              />
            </Footer>
          </Form>
        </Feedback>
      </Container>
    </Screen>
  );
};

export default IdentificationScreen;
