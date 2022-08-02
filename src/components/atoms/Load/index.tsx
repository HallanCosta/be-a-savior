import React from 'react';
import {
  View,
  ActivityIndicator,
  ViewProps
} from 'react-native';

import { theme } from '../../../global/styles/theme';

import { styles, Container } from './styles';

type Props = ViewProps & {};

export function Load({ ...rest }: Props){
  return (
    <Container {...rest}>
      <ActivityIndicator
        size="large"
        color={theme.colors.red}
      />
    </Container>
  );
}