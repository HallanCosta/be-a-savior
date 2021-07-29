import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container =  styled.View`
  flex-direction: row;
`;

export const Button = styled.View`
  width: auto;
  height: 45px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Email = styled(Button)`
  z-index: 3;
`;

export const Card = styled(Button)`
  z-index: 2;
  left: -35px;
`;

export const Pix = styled(Button)`
  z-index: 1;
  left: -65px;
`;

export const Whatsapp = styled(Button)`
  z-index: 0;
  left: -95px;
`;

// export const Whatsapp = styled(Button)`
//   background: blue;
//   left: -95px;
//   z-index: 0;

  // padding-left: 40px;
  // padding-right: 15px;
// `;