import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    
  }
});

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Form = styled.View`
  background: #fff;
  padding: 24px 27px 24px;
  border-radius: 20px;
  
  margin: 0 17px 0;
`;

export const ContentButton = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: 52px;
  margin-bottom: 52px;
`;