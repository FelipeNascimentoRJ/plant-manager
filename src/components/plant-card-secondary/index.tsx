import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Column,
  Photo,
  Name,
  HourLabel,
  Hour,
} from './styles';

export interface PlantCardSecondaryProps extends TouchableOpacityProps {
  name: string;
  photo: string;
  hour: string;
}

const data = {
  hourLabel: 'Regar ás',
};

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
  name,
  photo,
  hour,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Photo uri={photo} />
      <Name>{name}</Name>
      <Column alignItems="flex-end">
        <HourLabel>{data.hourLabel}</HourLabel>
        <Hour>{hour}</Hour>
      </Column>
    </Container>
  );
};

export default PlantCardSecondary;
