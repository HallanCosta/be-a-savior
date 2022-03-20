import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Content = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 24px;

  margin-top: 80px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 220px;
  border-radius: 24px;
`;