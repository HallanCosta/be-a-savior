import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
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
      .then(response => setIncidents(response.data))
      .catch(err => Alert.alert('Oops', 'Ocorreu um erro ao buscar os incidentes'));
  }, []);

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
        donated={false}
      />
    </Background>
  );
}