import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Form = styled.View`
  margin-top: 24px;

  padding: 0px 30px 0px;
  border-radius: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: 20px;
  margin-bottom: 45px;

  padding-left: 30px;
  padding-right: 30px;
`;