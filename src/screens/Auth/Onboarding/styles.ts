import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  padding: 20px 20px 20px;
`;

export const Content = styled.View`
  margin-top: 10px;
`;

export const Information = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.title900};
  color: white;

  margin-top: 38px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Button = styled.View`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  
  height: 54px;
`;

export const Ong = styled(Button)`
  width: 110px;
  background: #FFFFFF;
  z-index: 2;
  padding: 0px;
`;

export const OngText = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title500};
  color: #000000;
`;

export const Guest = styled(Button)`
  background: ${theme.colors.guest.background100};
  z-index: 1;

  left: -35px;
  padding-left: 45px;
  padding-right: 20px;
`;

export const GuestText = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title500};
  color: #FFFFFF;
`;

export const Donor = styled(Button)`
  background: ${theme.colors.donor.background100};
  z-index: 0;

  left: -65px;
  padding-left: 45px;
  padding-right: 20px;
`;

export const DonorText = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title500};
  color: #FFFFFF;
`;
