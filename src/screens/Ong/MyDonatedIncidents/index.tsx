import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { IncidentProps } from '../../../components/organisms/Incident';

import { 
  styles,
  Container
} from './styles';

export function MyDonatedIncidents() {
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as IncidentProps[];

  function handleNavigateToDetailsDonor() {
    navigate('DetailsDonor');
  }

  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Incidentes doados"
        subtitle={'Aqui é listado incidentes que \nos doadores já contribuíram  '}
      />

      <ListIncidents 
        data={routeParams}
        routerName="DetailsDonor"
        donated
      />
    </Background>
  );
}