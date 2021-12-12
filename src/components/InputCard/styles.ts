import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  margin: 13px 18px 17px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 18px;
  color: #1F1F1F;
`;

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 15px;
  color: #4C4C4C;

  /* border: 3px solid red; */
  max-width: 200px;
  /* width: 40%; */
`;