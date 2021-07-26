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
        title="Nome do doador"
        subtitle={name}
      />

      <InputCard 
        title="Valor doado"
        subtitle={coast}
      />
    </Container>
  );
}