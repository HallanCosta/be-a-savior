import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Load } from '../../../components/atoms/Load';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { useOng } from '../../../hooks/ong';

import { 
  styles,
  Container
} from './styles';

export function ShowIncidents() {
  const { navigate } = useNavigation();

  const { loading, incidents, total } = useOng();

  return (
    <Background gradient="donor">
      <Header 
        left={<ButtonGoBack />}
      />

      <Presentation 
        title="Incidentes"
        subtitle={'Aqui você encontra todos \nos casos das ONGs.'}
      />

      {/* <ListIncidents 
        data={incidents} 
        routerName="DonateIncident"
      /> */}

      { 
        loading
        ?
        <Load />
        :
        <ListIncidents 
          routerName="DonateIncident" 
          data={incidents} 
          total={total}
          donated={false}
          showTrash={true}
        />
      }
    </Background>
  );
}