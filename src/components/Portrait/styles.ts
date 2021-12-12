import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
`;

export const Content = styled.View`
  width: 302px;
  height: 190px;
  background: #C8C8C8;
  border-radius: 24px;
`;

export const Image = styled.Image`
  width: 302px;
  height: 190px;
  border-radius: 24px;
`;