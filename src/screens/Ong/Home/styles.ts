import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;