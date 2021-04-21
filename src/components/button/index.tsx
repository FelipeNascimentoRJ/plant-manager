import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...resp }) => {
  return (
    <Container {...resp}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;