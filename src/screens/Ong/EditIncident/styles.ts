import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Form = styled.View`
  margin-top: 24px;

  padding: 0px 30px 0px;
  border-radius: 20px;
`;

export const DonationAccumulateds = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-family: ${theme.fonts.text400};
  padding-left: 30px;
  margin-top: 10px;
`;

export const DonationAccumulatedsAmount = styled.Text`
  font-size: 20px;
  color: #f1f1f1;
  font-family: ${theme.fonts.title700};
  padding-left: 30px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: 15px;
  margin-bottom: 45px;

  padding-left: 30px;
  padding-right: 30px;
`;