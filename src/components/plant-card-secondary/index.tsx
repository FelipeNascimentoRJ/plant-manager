import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Container,
  Column,
  Photo,
  Name,
  HourLabel,
  Hour,
  PlantDeletedAnimated,
  PlantDeletedContainer,
  PlantDeletedButton,
  PlantDeletedButtonIcon,
} from './styles';

export interface PlantCardSecondaryProps extends TouchableOpacityProps {
  name: string;
  photo: string;
  hour: string;
  onPressPlantDelete: () => void;
}

const data = {
  hourLabel: 'Regar ás',
};

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
  name,
  photo,
  hour,
  onPressPlantDelete,
  ...rest
}) => {
  const renderPlantDeleted = () => (
    <PlantDeletedAnimated>
      <PlantDeletedContainer>
        <PlantDeletedButton onPress={onPressPlantDelete}>
          <PlantDeletedButtonIcon />
        </PlantDeletedButton>
      </PlantDeletedContainer>
    </PlantDeletedAnimated>
  );

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={renderPlantDeleted}
    >
      <Container {...rest}>
        <Photo uri={photo} />
        <Name>{name}</Name>
        <Column alignItems="flex-end">
          <HourLabel>{data.hourLabel}</HourLabel>
          <Hour>{hour}</Hour>
        </Column>
      </Container>
    </Swipeable>
  );
};

export default PlantCardSecondary;
