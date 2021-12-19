import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 248,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 55,
    marginTop: 48
  }
});

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: #fff;
  font-size: 35px;
  text-align: center;
`;