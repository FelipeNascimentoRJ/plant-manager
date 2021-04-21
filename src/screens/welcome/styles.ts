import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import colors from '../../utils/colors';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  margin-top: 38px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
`;

export const Image = styled.Image.attrs({ resizeMode: "contain" })`
  width: ${width * 0.7}px;
  height: 284px;
`;

export const Description = styled.Text`
  padding: 0 20px;
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