import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { Presentation } from '../../../components/Presentation';
import { Incident } from '../../../components/Incident';
import { ButtonGoBack } from '../../../components/ButtonGoBack';

import { 
  styles,
  Container
} from './styles';

export function ListIncidents(){
  const { navigate } = useNavigation();

  const incidents = [
    {
      id: '1',
      name: 'Gatinho sofreu um acidente na estrada.',
      coast: 'R$ 120,00'
    },
    {
      id: '2',
      name: 'Cachorro sofreu um acidente na estrada.',
      coast: 'R$ 120,00'
    },
    {
      id: '3',
      name: 'Jacaré sofreu um acidente na estrada.',
      coast: 'R$ 320,00'
    },
    {
      id: '4',
      name: 'Gorila sofreu um acidente na estrada.',
      coast: 'R$ 500,00'
    },
    {
      id: '5',
      name: 'Rato sofreu um acidente na estrada.',
      coast: 'R$ 10,00'
    },
    {
      id: '6',
      name: 'Peixe sofreu um acidente na estrada.',
      coast: 'R$ 20,00'
    }
  ];

  function handleNavigateToDetailsIncident() {
    navigate('DetailsIncident');
  }

  return (
    <Background>
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Meus Incidentes"
        subtitle={'Aqui você visualizar,  atualizar ou \nDeletar seus incidentes '}
      />

      <FlatList 
        style={styles.cardIncident}
        data={incidents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Incident 
            data={item}
            handleDetailsIncident={handleNavigateToDetailsIncident}
          />
        )}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
    </Background>
  );
}