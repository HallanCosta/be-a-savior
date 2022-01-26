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
  width: 400px;
  height: 288px;
  background: #fff;
  border-radius: 24px;
`;

export const Image = styled.Image`
  width: 400px;
  height: 288px;
  border-radius: 24px;
`;