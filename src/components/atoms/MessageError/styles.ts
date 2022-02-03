import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  background-color: #fff;
  border-radius: 20px;
  margin: 60px 24px 0px 24px;
`;

export const Error = styled.Text`
  padding: 18px 24px 18px;
  color: ${theme.colors.red};
  font-weight: bold;
  font-size: 40px;

  text-align: center;
`;