import styled from 'styled-components/native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding: 0 30px;
`;

export const TipContainer = styled.View`
  margin: 20px 30px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue_light};
  border-radius: 20px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  font-size: 16px;
  text-align: justify;
  color: ${colors.blue};
`;

export const PlantsCardSecondaryContainer = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const PlantsCardSecondaryTitle = styled.Text`
  margin-bottom: 20px;
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
`;

export const PlantsCardSecondaryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
  },
  removeClippedSubviews: true,
  initialNumToRender: 5,
  maxToRenderPerBatch: 10,
  windowSize: 10,
})`
`;