import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Load } from '../../../components/atoms/Load';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { IncidentProps } from '../../../components/organisms/Incident';
import { ListIncidents, TotalProps } from '../../../components/templates/ListIncidents';

import { api } from '../../../services/api';

import { useAuth, UserProps } from '../../../hooks/auth';

import { 
  styles,
  Container
} from '../MyIncidents/styles';

export function MyIncidents() {
  const navigation = useNavigation();

  const { user } = useAuth();

  const [total, setTotal] = useState<TotalProps>({} as TotalProps);
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloadIncidents, setReloadIncidents] = useState(false);

  // useFocusEffect(handleLoadIncidents);

  useEffect(() => {

    loadIncidents();

    // (async function() {
    //   const response = await api.get(`incidents/?ong_id=${user?.id}`)

    //   setTotal(JSON.parse(response.headers['x-total']));
    //   setIncidents(response.data);
    //   setLoading(false);
    // })()
  }, [reloadIncidents])

  function handleNavigateToMyDonatedIncidents() {
    navigation.navigate('MyDonatedIncidents', { 
      incidents, 
      total 
    });
  }

  function loadIncidents() {
    api.get(`incidents/?ong_id=${user?.id}`)
      .then(response => {
        setTotal(JSON.parse(response.headers['x-total']));
        setIncidents(response.data);
        setLoading(false);
      })
      .catch(err => Alert.alert('Oops', 'Ocorreu um erro ao buscar os incidentes'));
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

      { 
        loading 
        ? 
        <Load />
        :
        <ListIncidents 
          routerName="EditIncident" 
          data={incidents} 
          total={total}
          donated={false}
          showTrash={true}
        />
      }
    </Background>
  );
}