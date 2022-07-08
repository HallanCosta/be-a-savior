import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 27px;
  font-family: ${theme.fonts.title700};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 70px;
  margin-bottom: 52px;

  padding: 0 30px 0 30px;
`;