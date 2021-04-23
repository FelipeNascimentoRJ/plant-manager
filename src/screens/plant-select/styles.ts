import styled from 'styled-components/native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Screen = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Content = styled.View`
`;

export const HeaderContainer = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  font-family: ${fonts.heading};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

export const EnvironmentList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    width: '100%',
  },
  removeClippedSubviews: true,
  initialNumToRender: 5,
  maxToRenderPerBatch: 10,
  windowSize: 10,
})`
  margin: 20px 0;
  padding: 5px 30px;
`;

export const PlantsCardPrimaryList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    width: '100%',
  },
  removeClippedSubviews: true,
  initialNumToRender: 5,
  maxToRenderPerBatch: 10,
  windowSize: 10,
})`
  flex: 1;
  padding: 0 20px;
`;

export const PlantsCardPrimaryListLoading = styled.ActivityIndicator.attrs({
  color: colors.green,
})`
  margin: 20px 0;
`;