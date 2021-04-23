import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export interface EnvironmentProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

const buttonColor = ({ active }: EnvironmentProps) => {
  return active ? colors.green_light : colors.shape;
};

const buttonFont = ({ active }: EnvironmentProps) => {
  return active ? fonts.heading : fonts.text;
};

const buttonFontColor = ({ active }: EnvironmentProps) => {
  return active ? colors.green_dark : colors.heading;
};

export const Container = styled.TouchableOpacity`
  margin-right: 5px;
  height: 40px;
  min-width: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${buttonColor};
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-family: ${buttonFont};
  font-size: 14px;
  color: ${buttonFontColor};
`;