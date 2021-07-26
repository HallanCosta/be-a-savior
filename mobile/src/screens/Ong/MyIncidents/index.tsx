import React from 'react';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { Presentation } from '../../../components/Presentation';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { ListIncidents } from '../../../components/ListIncidents';

import { 
  styles,
  Container
} from '../MyIncidents/styles';

export function MyIncidents() {
  const incidents = [
    {
      id: '1',
      name: 'Gatinho sofreu um acidente na estrada.',
      coast: 'R$ 120,00',
      donated: true
    },
    {
      id: '2',
      name: 'Cachorro sofreu um acidente na estrada.',
      coast: 'R$ 120,00',
      donated: false
    },
    {
      id: '3',
      name: 'Jacaré sofreu um acidente na estrada.',
      coast: 'R$ 320,00',
      donated: true
    },
    {
      id: '4',
      name: 'Gorila sofreu um acidente na estrada.',
      coast: 'R$ 500,00',
      donated: false
    },
    {
      id: '5',
      name: 'Rato sofreu um acidente na estrada.',
      coast: 'R$ 10,00',
      donated: true
    },
    {
      id: '6',
      name: 'Peixe sofreu um acidente na estrada.',
      coast: 'R$ 20,00',
      donated: false
    }
  ];

  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Meus Incidentes"
        subtitle={'Aqui você visualizar,  atualizar ou \nDeletar seus incidentes '}
      />

      <ListIncidents data={incidents} />
    </Background>
  );
}