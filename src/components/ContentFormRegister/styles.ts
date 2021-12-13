import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title600};
  font-size: 24px;
  color: #FFFFFF;

  margin-top: 50px;
`;