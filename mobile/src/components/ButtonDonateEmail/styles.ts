import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
  }
});

export const Title = styled.View`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  color: #fff;
`;