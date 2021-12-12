import React from 'react';

import { InputCard } from '../InputCard';
import { Button } from '../Button';

import { theme } from '../../global/styles/theme';
import { 
  styles, 
  Container,
  Content
} from './styles';

type Props = {
  name: string;
  coast: string;
}

export function CardDetailsUser({
  name,
  coast
}: Props) {
  return (
    <Container>
      <InputCard 
        title="Nome"
        subtitle={name}
      />

      <InputCard 
        title="Valor"
        subtitle={coast}
      />
    </Container>
  );
}