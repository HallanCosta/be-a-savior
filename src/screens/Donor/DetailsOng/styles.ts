import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 50px;
  margin-bottom: 52px;

  padding: 0 30px 0 30px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
`;