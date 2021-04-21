import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-top: 38px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
`;

export const Image = styled.Image`
  width: 292px;
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

export const ButtonLabel = styled.Text`
  font-size: 24px;
  color: ${colors.white}
`;