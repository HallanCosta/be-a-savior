import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { ListIncidents } from '../../../components/templates/ListIncidents';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { IncidentProps } from '../../../components/organisms/Incident';

import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';

import { 
  styles,
  Container
} from '../MyIncidents/styles';

export function MyIncidents() {
  const { navigate } = useNavigation();

  const { user } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);

  /**const incidents = [
    {
      id: '1',
      name: 'Gatinho sofreu um acidente na estrada.',
      coast: 'R$ 120,00',
      description: 'Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      donated: true
    },
    {
      id: '2',
      name: 'Cachorro sofreu um acidente na estrada.',
      coast: 'R$ 120,00',
      description: 'Um cachorro filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      donated: false
    },
    {
      id: '3',
      name: 'Jacaré sofreu um acidente na estrada.',
      description: 'Um jacaré filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 'R$ 320,00',
      donated: true
    },
    {
      id: '4',
      name: 'Gorila sofreu um acidente na estrada.',
      description: 'Um gorila filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 'R$ 500,00',
      donated: false
    },
    {
      id: '5',
      name: 'Rato sofreu um acidente na estrada.',
      description: 'Um rato filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 'R$ 10,00',
      donated: true
    },
    {
      id: '6',
      name: 'Peixe sofreu um acidente na estrada.',
      description: 'Um peixe filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 'R$ 20,00',
      donated: false
    }
  ]; */


  useEffect(() => {
    api.get(`incidents/?ong_id=${user?.id}`)
      .then(response => setIncidents(response.data));
  }, []);


  function handleNavigateToMyDonatedIncidents() {
    navigate('MyDonatedIncidents', incidents);
  }

  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
        right={ <ButtonDonatedIncidents onPress={handleNavigateToMyDonatedIncidents} /> }
      />

      <Presentation 
        title="Meus Incidentes"
        subtitle={'Aqui você visualizar,  atualizar ou \nDeletar seus incidentes '}
      />

      <ListIncidents 
        data={incidents} 
        routerName="EditIncident"
      />
    </Background>
  );
}