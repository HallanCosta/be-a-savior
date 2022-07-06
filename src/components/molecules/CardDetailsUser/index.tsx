import React from 'react';

import { InputCard } from '../InputCard';
import { Button } from '../../atoms/Button';

import { theme } from '../../../global/styles/theme';
import { 
  styles, 
  Container,
  Content
} from './styles';

type Props = {
  name: string;
  description: string;
  cost: string;
}

export function CardDetailsUser({
  name,
  description,
  cost
}: Props) {
  return (
    <Container>
      <InputCard 
        title="Nome do Incidente"
        subtitle={name}
      />

      <InputCard 
        title="Descrição"
        subtitle={description}
      />

      <InputCard 
        title="Custo"
        subtitle={cost}
      />
    </Container>
  );
}