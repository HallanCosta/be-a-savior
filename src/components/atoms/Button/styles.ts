import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

import { Props } from '.'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30
  }
});

export const Title = styled.Text<Pick<Props, 'color'>>`
  font-family: ${theme.fonts.text400};
  color: ${({ color }) => color === '#FFFFFF' ? '#000' : '#FFFFFF'};
  font-size: 18px;
`;

export const IconBox = styled.View`
  flex-direction: column;
`;