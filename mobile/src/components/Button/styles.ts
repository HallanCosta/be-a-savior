import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 18px;
  color: #fff;
`;