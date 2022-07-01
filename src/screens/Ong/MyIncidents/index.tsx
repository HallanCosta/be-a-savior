import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Load } from '../../../components/atoms/Load';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { useOng } from '../../../hooks/ong';

import { 
  styles,
  Container
} from '../MyIncidents/styles';

export function MyIncidents() {
  const navigation = useNavigation();

  const { total, loading, incidents, loadIncidents } = useOng();

  useFocusEffect(
    useCallback(() => {
      return loadIncidents();
    }, [])
  );

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
        right={ 
          loading
          ?
          <Load />
          :
          <ButtonDonatedIncidents onPress={handleNavigateToMyDonatedIncidents} />
        }
      />

      <Presentation 
        title="Meus Incidentes"
        subtitle={'Aqui você visualiza,  atualizar ou \nDeletar seus incidentes '}
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