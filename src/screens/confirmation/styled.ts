import styled from 'styled-components/native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Screen = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  color: ${colors.white};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 54px;
  width: 100%;
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

export const Description = styled.Text`
  margin: 38px 0;
  font-family: ${fonts.text};
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
`;