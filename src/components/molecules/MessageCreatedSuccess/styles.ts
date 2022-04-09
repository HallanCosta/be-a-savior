import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../../global/styles/theme';

const STATUSBAR_HEIGHT = getStatusBarHeight() + 205;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  width: 100%;
  margin-top: ${`${STATUSBAR_HEIGHT}px`};
  font-size: 36px;

  font-family: ${theme.fonts.title900};
  color: #FFFFFF;
  text-align: center;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
`;

export const Square = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 24px;
  
  border: 3px solid ${theme.colors.green};
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  height: 72px;
  padding: 0 24px 0;
  margin-top: 152px
  margin-bottom: 40px
`;