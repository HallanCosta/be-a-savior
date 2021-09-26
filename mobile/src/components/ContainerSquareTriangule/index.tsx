import React, { ReactNode } from 'react';
import { View } from 'react-native';

import {
  styles,
  Container,
  Left,
  Right,
  Content
} from './styles';

type Props = {
  children: ReactNode;
}

export function ContainerSquareTriangule({ children }: Props) {
  return (
    <Container>
      <Left />
      <Right />

      <Content>
        {children}
      </Content>
    </Container>
  );
}