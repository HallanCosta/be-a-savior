import React, { useEffect, useState, useCallback } from 'react';

import { InputCard } from '../../molecules/InputCard';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';


export type OngProps = {
  id: string;
  name: string;
  email: string;
  phone: number;
}

type Props = {
  data: OngProps;
}

export function Ong({
  data,
}: Props){
  return (
    <Container>
      <InputCard 
        title="Nome da Ong"
        subtitle={data.name}
      />

      <InputCard 
        title="Email"
        subtitle={data.email}
      />

      <InputCard 
        title="Telefone"
        subtitle={String(data.phone)}
      />
    </Container>
  );
}