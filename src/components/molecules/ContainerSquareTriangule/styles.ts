import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.View`
  width: 100%;
  height: 300px;
`;

export const Left = styled.View`
  position: absolute;
  border-style: solid;
  border-right-width: 800px;
  border-right-color: transparent;
  border-bottom-width: 250px;
  border-bottom-color: #FFFFFF;
  border-left-width: 0;
  border-left-color: #FFFFFF;
  top: 50px;
  right: -310px;
`;

export const Right = styled.View`
  position: absolute;
  border-style: solid;
  border-left-width: 800px;
  border-left-color: transparent;
  border-bottom-width: 250px;
  border-bottom-color: #FFFFFF;
  border-right-width: 0;
  border-right-color: #FFFFFF;
  top: 50px;
  left: -310px;
`;

export const Content = styled.View`
  position: absolute;
  top: 180px;
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
`;