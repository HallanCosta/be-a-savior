import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.ScrollView``;

export const Footer = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
`;