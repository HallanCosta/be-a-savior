import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 53,
    borderRadius: 8,
    color: '#000',
    paddingHorizontal: 12,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    marginBottom: 21
  }
});

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 18px;
  color: #1F1F1F;
`;