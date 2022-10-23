import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

type ButtonTextProps = {
  ong?: boolean;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10
  },

  buttonOng: {
    backgroundColor: '#FFFFFF'
  },
  buttonGuest: {
    backgroundColor: theme.colors.guest.background90,
    marginLeft: 10,
    marginRight: 10
  },
  buttonDonor: {
    backgroundColor: theme.colors.donor.background100,
  }
});

export const Container = styled.View`
  padding: 20px 40px 20px;
`;

export const Content = styled.View`
  margin-top: 65px;
`;

export const Number = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: white;
`;

export const Information = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.text400};
  color: white;

  margin-top: 20px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Button = styled.View`
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  
  height: 54px;
  padding: 10px 20px 10px 20px;
`;

export const Ong = styled(Button)`
  background: #FFFFFF;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 18px;
  font-family: ${theme.fonts.title500};
  color: ${({ ong }) => ong ? '#000000' : '#FFFFFF'};
`;
