import { Platform, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Screen = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  color: ${colors.white};
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0 54px;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  margin-top: 38px;
  font-family: ${fonts.heading};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  line-height: 38px;
  color: ${colors.heading};
`;

export interface InputProps extends TextInputProps {
  isInputValid: boolean;
}

const inputBorderColor = ({ isInputValid }: InputProps) => {
  return isInputValid ? colors.green : colors.heading;
};

export const Input = styled.TextInput`
  margin: 50px 0;
  padding: 10px;
  width: 100%;
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  border-bottom-width: 1px;
  border-color: ${inputBorderColor};
`;

export const Footer = styled.View`
  width: 100%;
`;