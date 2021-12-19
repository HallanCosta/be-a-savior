import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 22px 28px 20px; 
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.title500};
  color: #FFFFFF;
`;