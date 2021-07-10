import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  width: 100%;
  margin: 120px 38px 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 27px;
  font-family: ${theme.fonts.title600};
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: ${theme.fonts.text400};

  line-height: 26px;
`;