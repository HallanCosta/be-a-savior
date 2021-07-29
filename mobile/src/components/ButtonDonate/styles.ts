import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

import { Props } from './';

type ContainerProps = Pick<Props, 'color' | 'buttonDonatePrimary'>;

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  }
});

export const Container = styled.View<ContainerProps>`
  background: ${({ color }) => theme.colors[color]};
  
  width: auto;
  height: 45px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  padding-left: ${({ buttonDonatePrimary }) => buttonDonatePrimary ? '15px' : '40px'};
  padding-right: 15px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  color: #fff;
`;