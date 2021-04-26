import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

const { width } = Dimensions.get('window');

export const Screen = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  padding: 0 20px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  margin-top: 38px;
  font-family: ${fonts.heading};
  font-size: 32px;
  text-align: center;
  line-height: 38px;
  color: ${colors.heading};
`;

export const Image = styled.Image.attrs({ resizeMode: "contain" })`
  width: ${width * 0.7}px;
  height: 284px;
`;

export const Description = styled.Text`
  padding: 0 20px;
  font-family: ${fonts.text};
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
`;

export const Button = styled.TouchableOpacity`
  margin-bottom: 10px;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.green};
  border-radius: 16px;
`;

export const ButtonIcon = styled(Feather).attrs({ name: "chevron-right" })`
  font-size: 32px;
  color: ${colors.white}
`;