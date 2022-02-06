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

type LoadIncidentsProps = {
  data: IncidentProps[];
  total: TotalProps;
};

export function MyIncidents() {
  const { navigate } = useNavigation();

  const { user: userAuth } = useAuth();

  const [total, setTotal] = useState<TotalProps>({} as TotalProps);
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(() => {
    const user = userAuth as UserProps; 

    api.get(`incidents/?ong_id=${user.id}`)
      .then(response => handleLoadIncidents({ 
        data: response.data, 
        total: JSON.parse(response.headers['x-total'])
      }))
      .catch(err => Alert.alert('Oops', 'Ocorreu um erro ao buscar os incidentes'));
  });

  function handleNavigateToMyDonatedIncidents() {
    navigate('MyDonatedIncidents', { 
      incidents, 
      total 
    });
  }

  function handleLoadIncidents({ data, total }: LoadIncidentsProps) {
    setTotal(total);
    setIncidents(data);
    setLoading(false);
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
          data={incidents} 
          total={total}
          routerName="EditIncident" 
          donated={false}
          showTrash={true}
        />
      }
    </Background>
  );
}