import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  bottom: 0%;
`;

export const Overlay = styled.View`
  flex: 1;
  background: ${theme.colors.overlay}; 
`;

export const Background = styled.View`
  flex: 1;
  background: #fff;
  border-top-left-radius: 20px; 
  border-top-right-radius: 20px; 
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