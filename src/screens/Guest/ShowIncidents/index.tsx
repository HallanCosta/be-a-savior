import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';
import { Load } from '../../../components/atoms/Load';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('incidents')
      .then(response => handleLoadIncidents(response.data))
      .catch(err => Alert.alert('Oops', 'Ocorreu um erro ao buscar os incidentes'));
  }, []);

  function handleLoadIncidents(data: IncidentProps[]) {
    setIncidents(data);
    setLoading(false);
  }

  return (
    <Background gradient="guest">
      <Header 
        right={<ButtonLogout gradient="guest" onPress={signOut} />}
      />

      <Presentation 
        title="Incidentes"
        subtitle={'Aqui você encontra todos \nos casos das ONGs.'}
      />
      
      {
        loading
        ?
        <Load />
        :
        <ListIncidents 
          data={incidents} 
          routerName="DonateIncident"
          donated={false}
          showTrash={false}
        />
      }
    </Background>
  );
}