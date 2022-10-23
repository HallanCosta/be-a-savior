import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 32,
    paddingBottom: 32,
    borderRadius: 20,
    width: '63%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48
  }
});

export const Title = styled.Text`
  font-family: ${theme.fonts.title600};
  color: #fff;
  font-size: 28px;
  text-align: center;
`;