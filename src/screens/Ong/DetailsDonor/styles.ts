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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 52px;
  margin-bottom: 52px;

  padding: 0 30px 0 30px;

`;

export const Card = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 25px 30px 30px 30px;
  background-color: #fff;
  border-radius: 24px;
`;