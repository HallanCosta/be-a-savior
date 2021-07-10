import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT = getStatusBarHeight() + 52;

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding-top: ${`${STATUSBAR_HEIGHT}px`};
  padding-left: 28px;
  padding-right: 28px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  color: #fff;
  font-size: 20px;
`;
