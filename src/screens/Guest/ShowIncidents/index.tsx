import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { IncidentProps } from '../../../components/organisms/Incident';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { useAuth } from '../../../hooks/auth';

import { 
  styles,
  Container
} from './styles';
import { api } from '../../../services/api';

export function ShowIncidents() {
  const { navigate } = useNavigation();

  const { signOut } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);

  useEffect(() => {
    api.get('incidents')
      .then(response => setIncidents(response.data));
  }, []);


  /*const incidents: IncidentProps[] = [
    {
      id: '1',
      name: 'Gatinho sofreu um acidente na estrada.',
      coast: 1011,
      description: 'Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      donates: [
        {
          amount: 1010,
          id: "5f8e0ba3-1fa4-4c6c-b846-d03ccefd96c5",
          incident_id: "7a5db273-d500-449b-839a-50eeab00d5b7",
          user_id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
        }
      ],
      user_id: ''
    },
    {
      id: '2',
      name: 'Cachorro sofreu um acidente na estrada.',
      coast: 1011,
      description: 'Um cachorro filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      donates: [],
      user_id: ''
    },
    {
      id: '3',
      name: 'Jacaré sofreu um acidente na estrada.',
      description: 'Um jacaré filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 1011,
      donates: [
        {
          amount: 1010,
          id: "5f8e0ba3-1fa4-4c6c-b846-d03ccefd96c5",
          incident_id: "7a5db273-d500-449b-839a-50eeab00d5b7",
          user_id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
        }
      ],
      user_id: ''
    },
    {
      id: '4',
      name: 'Gorila sofreu um acidente na estrada.',
      description: 'Um gorila filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 1011,
      donates: [],
      user_id: ''
    },
    {
      id: '5',
      name: 'Rato sofreu um acidente na estrada.',
      description: 'Um rato filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 1011,
      donates: [
        {
          amount: 1010,
          id: "5f8e0ba3-1fa4-4c6c-b846-d03ccefd96c5",
          incident_id: "7a5db273-d500-449b-839a-50eeab00d5b7",
          user_id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
        }
      ],
      user_id: ''
    },
    {
      id: '6',
      name: 'Peixe sofreu um acidente na estrada.',
      description: 'Um peixe filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
      coast: 1011,
      donates: [],
      user_id: ''
    }
  ];*/

  return (
    <Background gradient="guest">
      <Header 
        right={<ButtonLogout gradient="guest" onPress={signOut} />}
      />

      <Presentation 
        title="Incidentes"
        subtitle={'Aqui você encontra todos \nos casos das ONGs.'}
      />

      <ListIncidents 
        data={incidents} 
        routerName="DonateIncident"
      />
    </Background>
  );
}