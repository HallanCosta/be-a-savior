import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 26px;
  color: #FFFFFF;
  margin-top: 40px;
`; 

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 18px;
  color: #C4C4C4;
  
  margin-top: 23px;
  margin-bottom: 60px;
`;