import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Photo, Name } from './styles';

export interface PlantCardPrimaryProps extends TouchableOpacityProps {
  name: string;
  photo: string;
}

const PlantCardPrimary: React.FC<PlantCardPrimaryProps> = ({ name, photo, ...rest }) => {
  return (
    <Container {...rest}>
      <Photo uri={photo} />
      <Name>{name}</Name>
    </Container>
  );
};

export default PlantCardPrimary;
