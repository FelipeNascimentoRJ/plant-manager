import styled from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export const Screen = styled.View`
  flex: 1;
`;

export const PlantContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  padding: 50px 30px;
  background-color: ${colors.shape};
`;

export const PlantImage = styled(SvgFromUri).attrs({
  with: 200,
  height: 200,
})`
`;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
`;

export const PlantAbout = styled.Text`
  margin-top: 10px;
  font-family: ${fonts.text};
  font-size: 16px;
  text-align: center;
  color: ${colors.heading};
`;

export const ControllerContainer = styled.View`
  flex: 1;
  padding: 0 30px 30px 30px;
  background-color: ${colors.white};
`;

export const Controller = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`;

export const TipContainer = styled.View`
  position: relative;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue_light};
  border-radius: 20px;
  bottom: 50px;
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

export const AlertText = styled.Text`
  font-family: ${fonts.complement};
  font-size: 16px;
  text-align: center;
  color: ${colors.heading};
`;

export const TimePicker = styled(DateTimePicker).attrs({
  mode: 'timer',
  display: 'spinner',
})`
  height: 150px;
  color: ${colors.heading};
`;

export const TimePickerButton = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-width: 1px;
  border-color: ${colors.heading};
  border-radius: 16px;
`;

export const TimePickerButtonText = styled.Text`
  font-family: ${fonts.heading};
  font-size: 16px;
  color: ${colors.heading};
`;