import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Load } from '../../atoms/Load';
import { InputCard } from '../../molecules/InputCard';

import { currencyFormat } from '../../../utils/currencyFormat';

import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import { useIncidents } from '../../../hooks/incidents';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  ContentCard,
  Trash
} from './styles';

export type DonateProps = {
  id: string;
  incident_id: string;
  user_id: string;
  amount: number;
}

export type IncidentProps = {
  id: string;
  name: string;
  description: string;
  cost: number;
  donations: DonateProps[];
  user_id: string;
}

type Props = {
  data: IncidentProps;
  routerName: string;
  showTrash: boolean;
}

export function Incident({
  data,
  routerName,
  showTrash
}: Props){
  const { user } = useAuth();
  const { incidents, setIncidents } = useIncidents();

  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);

  function handleNavigateToEditIncident() {
    navigate(routerName, data);
  }

  function handleDeleteIncident() {
    setLoading(true);

    api.delete(`incidents/${data.id}`, {
      headers: {
        authorization: `Bearer ${user?.token}`
      }
    })
      .then(response => {
        setLoading(false);
        const incidentsFiltered = incidents.filter(incident => incident.id != data.id);
        setIncidents(incidentsFiltered);
      })
      .catch(err => Alert.alert('Oops', 'Não foi possível deletar o incidente'));
  }

  function handleMessageIncident() {
    console.log('> Message Incident');
    Alert.alert('', `Você deseja realmente deletar o incidente ${data.name}?`, [
      {
        text: 'Sim',
        style: 'default',
        onPress: handleDeleteIncident
      },
      {
        text: 'Não',
        style: 'default'
      }
    ]);
  }

  return (
    <>
      {
        loading
        ?
        <Load />
        :
        <Container>
          
          <ContentCard>
            <InputCard 
              title="Incidente"
              subtitle={data.name}
            />

            { showTrash &&
              <RectButton onPress={handleMessageIncident}>
                <Feather 
                  name="trash-2"
                  size={24}
                  color='#C54747'
                />  
              </RectButton>
            }
          </ContentCard>
          
          <ContentCard>
            <InputCard 
              title="Valor"
              subtitle={currencyFormat(data.cost)}
            />

            <BorderlessButton
              onPress={handleNavigateToEditIncident}
              style={styles.details}
            >
              <Feather 
                name="chevron-right"
                size={30}
                color={theme.colors.ong.background100}
              />
            </BorderlessButton>
          </ContentCard>
        </Container>
      }
    </>
  );
}