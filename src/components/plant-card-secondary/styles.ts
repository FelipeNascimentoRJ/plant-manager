import styled from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Container = styled.View`
  margin: 10px 0;
  padding: 20px 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  border-radius: 20px;
`;

export const Column = styled.View`
  flex: 1;
  align-items: ${({ alignItems }: { alignItems: string }) => alignItems};
`;

export const Photo = styled(SvgFromUri).attrs({
  width: 50,
  height: 50,
})`
`;

export const Name = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.heading};
  font-size: 16px;
  color: ${colors.heading};
`;

export const HourLabel = styled.Text`
  margin: 5px 0;
  font-family: ${fonts.text};
  font-size: 16px;
  color: ${colors.body_light};
`;

export const Hour = styled.Text`
  margin: 5px 0;
  font-family: ${fonts.heading};
  font-size: 16px;
  color: ${colors.body_dark};
`;