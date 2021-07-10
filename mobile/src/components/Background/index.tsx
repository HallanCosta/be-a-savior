import React, { ReactNode } from 'react';

import {
  View
} from 'react-native';

import { 
  styles,
  Container
} from './styles';

export type Props = {
  children: ReactNode;
  color: string;
}

export function Background({ 
  children, 
  color 
}: Props){
  return (
    <Container color={color}>
      {children}
    </Container>
  );
}