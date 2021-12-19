import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 120,
    borderRadius: 8,

    color: '#000',
    paddingHorizontal: 15,
    paddingTop: 14,
    paddingBottom: 14,

    fontFamily: theme.fonts.text400,
    fontSize: 16,
    marginBottom: 21,
    
    textAlignVertical: 'top'
  }
});

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 18px;
  color: #FFF;
`;