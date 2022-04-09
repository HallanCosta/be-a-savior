import React from 'react';

import { 
  styles, 
  Container,
  Error
} from './styles';

type Props = {
  message: string;
}

export function MessageError({ message }: Props) {
  return (
    <Container>
        <Error>{message}</Error>
    </Container>
  );
}