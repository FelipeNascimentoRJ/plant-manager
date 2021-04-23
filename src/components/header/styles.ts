import styled from 'styled-components/native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Container = styled.View`
  width: 100%;
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GreetingContainer = styled.View`
  flex-direction: column;
`;

export const Greeting = styled.Text`
  font-family: ${fonts.text};
  font-size: 32px;
  color: ${colors.heading};
`;

export const UserName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 32px;
  line-height: 40px;
  color: ${colors.heading};
`;

export const UserAvatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;