import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  inputAmount: { 
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    fontSize: 18
  }
});

export const Container = styled.ScrollView`
  padding-bottom: 40px;
`;

export const Footer = styled.View`
  width: auto;
  height: auto;
  background: #fff;

  padding: 18px 24px 18px;
  border-radius: 20px;
  margin: 35px 30px 35px 30px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.title700};
  color: #000000;
`;