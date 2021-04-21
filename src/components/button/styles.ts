import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

const buttonColor = ({ disabled }: TouchableOpacityProps) => {
  return disabled ? colors.green_light : colors.green;
};

export const Container = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${buttonColor};
  border-radius: 16px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 16px;
  color: ${colors.white};
`;