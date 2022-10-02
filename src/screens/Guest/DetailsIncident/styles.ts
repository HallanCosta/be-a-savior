import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({

});

export const Container = styled.ScrollView``;

export const Footer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 60px;
`;

export const FooterTitle = styled.Text`
  color: #fff;
  font-size: 27px;
  font-family: ${theme.fonts.title700};
`;