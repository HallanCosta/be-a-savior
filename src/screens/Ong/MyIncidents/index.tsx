import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

import { Background } from '../../../components/atoms/Background';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Load } from '../../../components/atoms/Load';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { useIncidents } from '../../../hooks/incidents';

import { 
  styles,
  Container
} from '../MyIncidents/styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../../global/styles/theme';

export function MyIncidents() {
  const navigation = useNavigation();

  const { total, loading, incidents, loadIncidents } = useIncidents();

  useEffect(() => {
    navigation.addListener('focus', () => loadIncidents());
    console.log('Incidents: ', incidents);
  }, [incidents]);

  function handleNavigateToMyDonatedIncidents() {
    navigation.navigate('MyDonatedIncidents', { 
      incidents, 
      total 
    });
  }

  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
        right={ <ButtonDonatedIncidents onPress={handleNavigateToMyDonatedIncidents} /> }
      />

      <Presentation 
        title="Meus Incidentes"
        subtitle={'Aqui você visualiza, atualiza ou \nDeleta seus incidentes '}
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