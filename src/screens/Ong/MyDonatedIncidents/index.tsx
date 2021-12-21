import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { 
  styles,
  Container
} from '../MyIncidents/styles';

export function MyDonatedIncidents() {
  const { navigate } = useNavigation();

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

  function handleNavigateToDetailsDonor() {
    navigate('DetailsDonor');
  }

  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Incidentes doados"
        subtitle={'Aqui é listado incidentes que \nos doadores já contribuíram  '}
      />

      <ListIncidents 
        data={incidents}
        navigate={handleNavigateToDetailsDonor}
        donated
      />
    </Background>
  );
}