import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { Event } from '@react-native-community/datetimepicker';

import {
  Screen,
  PlantContainer,
  PlantImage,
  PlantName,
  PlantAbout,
  ControllerContainer,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertText,
  TimePicker,
  TimePickerButton,
  TimePickerButtonText,
} from './styles';

import { time } from '../../utils/date';
import Storage from '../../utils/storage';
import Constants from '../../utils/constants';

import { Plant } from '../../services/api';
import Button from '../../components/button';
import waterDrop from '../../assets/waterdrop.png';

export interface RouteParams {
  plant: Plant;
}

const data = {
  alert: 'Escolha hora futura! ⏰',
  alertText: 'Escolha o melhor horário para ser lembrado',
  alertTextPlantSave: 'Não foi possível salvar a planta. 😭',
  buttonTimerPicker: (date: Date) => `Mudar ${time(date)}`,
  button: 'Cadastrar planta',
};

const PlantSaveScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [selectedDateTime, setSelectedDateTime] = useState<Date>(new Date);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(Platform.OS === 'ios');

  const { plant } = route.params as RouteParams;

  const onChangeTimePicker = (_event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && dateTime < new Date()) {
      setSelectedDateTime(new Date());
      return Alert.alert(data.alert);
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const onPressTimePickerButton = () => {
    setShowDatePicker(oldState => !oldState);
  };

  const onPressButton = async () => {
    try {
      let plants = {};

      const plantsSaved = await Storage.get(
        Constants.STORAGE_PLANTS
      );

      if (plantsSaved) {
        const oldPlants = JSON.parse(plantsSaved);

        const newPlant = {
          [plant.id]: {
            ...plant,
            dateTimeNotification: selectedDateTime,
          }
        };

        plants = {
          ...oldPlants,
          ...newPlant,
        };
      }

      await Storage.set(
        Constants.STORAGE_PLANTS,
        JSON.stringify(plants)
      );

      const params = {
        icon: 'hug',
        title: 'Tudo certo',
        description: 'Fique tranquilo(a) que sempre vamos lembrar você de cuidar da sua plantinha.',
        buttonTitle: 'Muito obrigado :D',
        nextScreen: 'PlantSavedScreen',
      };

      navigation.navigate('ConfirmationScreen', params);
    } catch (error) {
      Alert.alert(data.alertTextPlantSave);
    }
  };

  return (
    <Screen>
      <PlantContainer>
          <PlantImage uri={plant.photo} />
          <PlantName>{plant.name}</PlantName>
          <PlantAbout>{plant.about}</PlantAbout>
      </PlantContainer>
      <ControllerContainer>
          <TipContainer>
            <TipImage source={waterDrop} />
            <TipText>{plant.water_tips}</TipText>
          </TipContainer>
        <Controller>
          <AlertText>{data.alertText}</AlertText>
          {showDatePicker && (
            <TimePicker
              value={selectedDateTime}
              onChange={onChangeTimePicker}
            />
          )}
          {Platform.OS === 'android' && (
            <TimePickerButton onPress={onPressTimePickerButton}>
              <TimePickerButtonText>
                {data.buttonTimerPicker(selectedDateTime)}
              </TimePickerButtonText>
            </TimePickerButton>
          )}
          <Button
            title={data.button}
            onPress={onPressButton}
          />
        </Controller>
      </ControllerContainer>
    </Screen>
  );
};

export default PlantSaveScreen;
