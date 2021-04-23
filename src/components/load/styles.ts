import styled from 'styled-components/native';
import  LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Animation = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  width: 200px;
  height: 200px;
  background-color: transparent;
`;