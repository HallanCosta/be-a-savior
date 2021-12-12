import React, { ReactNode } from 'react';

import {
  styles,
  Container
} from './styles';

type Props = {
  children: ReactNode;
}

export function FormAuth({
  children
}: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}