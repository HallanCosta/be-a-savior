import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  color: #C4C4C4;
  font-size: 16px;
  font-family: ${theme.fonts.text400};
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-family: ${theme.fonts.title500};
`;