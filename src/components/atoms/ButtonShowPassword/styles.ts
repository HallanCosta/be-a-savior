import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  border: 2px solid #FFFFFF;

  border-radius: 4px;
`;