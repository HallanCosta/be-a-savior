import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
  
export const Container = styled.View`
  width: 100%;
  flex-direction: column;

  background-color: #fff;

  padding: 25px 30px 30px 30px;
  margin-top: 40px;

  border-radius: 24px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;