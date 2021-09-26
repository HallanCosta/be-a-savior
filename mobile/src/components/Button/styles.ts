import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

import { Props } from './'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56
  }
});

export const Container = styled.View<Pick<Props, 'color'>>`
  flex-direction: row;
  flex: 1;
  background: ${({ color }) => color};

  height: 56px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  margin-top: 15px;
`;

export const Title = styled.Text<Pick<Props, 'color'>>`
  font-family: ${theme.fonts.text400};
  color: ${({ color }) => color === '#FFFFFF' ? '#000' : '#FFFFFF'};
  font-size: 18px;
`;