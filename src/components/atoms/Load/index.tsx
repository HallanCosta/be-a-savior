import React from 'react';

import {
  View,
  ActivityIndicator
} from 'react-native';

import { theme } from '../../../global/styles/theme';

import { styles, Container } from './styles';

export function Load(){
  return (
    <Container>
      <ActivityIndicator
        size="large"
        color={theme.colors.red}
      />
    </Container>
  );
}