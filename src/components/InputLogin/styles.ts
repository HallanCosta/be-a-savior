import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#02004F',
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: theme.colors.ong.background100,
    borderRadius: 12,
    color: '#FFFFFF'
  },

  buttonShowPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    left: -45
  }
});

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 28px;
`;