import styled from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Container = styled.TouchableOpacity`
  margin: 10px;
  padding: 10px 0;
  flex: 1;
  align-items: center;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
`;

export const Photo = styled(SvgFromUri).attrs({
  width: 70,
  height: 70,
})`
`;

export const Name = styled.Text`
  margin: 16px 0;
  font-family: ${fonts.heading};
  color: ${colors.green_dark};
`;