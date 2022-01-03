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
  margin-left: 28px;
  margin-right: 28px;
`;

export const FormTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  font-size: 24px;
  color: #FFFFFF;

  margin-top: 50px;
`;

export const Footer = styled.View`
  width: 100px;
  height: 55px;
  background-color: red;
`;