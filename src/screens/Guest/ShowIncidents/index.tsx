import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { 
  styles,
  Container
} from './styles';

export function ShowIncidents() {
  const { navigate } = useNavigation();

  function handleNavigateToDonateIncident() {
    navigate('DonateIncident');
  }

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
    <Background gradient="guest">
      <Header 
        right={<ButtonLogout gradient="guest" />}
      />

      <Presentation 
        title="Incidentes"
        subtitle={'Aqui você encontra todos \nos casos das ONGs.'}
      />

      <ListIncidents 
        data={incidents} 
        navigate={handleNavigateToDonateIncident}  
      />
    </Background>
  );
}