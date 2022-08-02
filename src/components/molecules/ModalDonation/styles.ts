import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  inputAmount: { 
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    fontSize: 18
  }
});

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background: ${theme.colors.overlay};
  z-index: 1;
`;

export const Container = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  bottom: 0%;

  background: #fff;
  border-top-left-radius: 20px; 
  border-top-right-radius: 20px; 

  z-index: 2;
`;

export const Bar = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;

  background: ${theme.colors.overlay};
  align-self: center;
  margin-top: 13px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 30px;
`;