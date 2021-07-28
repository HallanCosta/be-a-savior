import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View``;

export const Form = styled.View`
  width: auto;
  height: auto;
  background: #fff;

  padding: 18px 24px 18px;
  border-radius: 20px;
  margin: 35px 30px 0;
`;


export const Line = styled.Text`
  border-top-width: 1px;
  border-top-color: ${theme.colors.donor.background100};
`;

