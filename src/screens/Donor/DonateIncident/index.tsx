import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { 
  styles,
  Container,
  Footer  
} from './styles';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { InputCard } from '../../../components/molecules/InputCard';
import { Incident, IncidentProps } from '../../../components/organisms/Incident';

import { useIncident } from '../../../hooks/incident';
import { countTotalDonationsAmount } from '../../../utils/incident';

export function DonateIncident() {

  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const { navigate } = useNavigation();

  const { loadIncident } = useIncident();

  const [totalDonationsAmout, setTotalDonationsAmout] = useState(0);

  useEffect(
    useCallback(() => {
      setTotalDonationsAmout(
        countTotalDonationsAmount(routeParams.donations)
      );
    },[])
  );

  function handleNavigateToDetailsOng() {
    navigate('DetailsOng');
  }
  
  return (
    <Background gradient="donor">
      <Container>
        <Header 
          left={<ButtonGoBack />}
          right={ 
            <ButtonDonatedIncidents 
              onPress={handleNavigateToDetailsOng} 
            /> 
          }
        />

        <Presentation 
          title="Doação"
          subtitle={'Efetue uma doação e ajude \nos incidentes :)'}
        />

        <Incident 
          data={routeParams}
          accumulatedDonations={totalDonationsAmout}
        />

        <Footer>
        
          
        </Footer>
      </Container>
    </Background>
  );
}