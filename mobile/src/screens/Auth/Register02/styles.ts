import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 24px;
  color: #FFFFFF;

  margin-top: 50px;
`;

export const Footer = styled.View`
  width: 100px;
  height: 55px;
  background-color: red;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;