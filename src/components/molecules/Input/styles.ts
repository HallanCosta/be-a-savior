import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

type TitleProps = {
  color: string;
}

export const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 53,
    borderRadius: 8,
    color: '#000',
    paddingHorizontal: 15,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    marginBottom: 21
  }
});

export const Container = styled.View``;

export const Title = styled.Text<TitleProps>`
  font-family: ${theme.fonts.title500};
  font-size: 18px;
  color: ${({ color }) => color };
  margin-bottom: 4px;
`;