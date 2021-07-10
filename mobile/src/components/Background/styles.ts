import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

import { Props } from '.';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View<Pick<Props, 'color'>>`
  flex: 1;
  background: ${({ color }) => color};
`;