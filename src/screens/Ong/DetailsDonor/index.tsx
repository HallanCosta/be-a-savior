import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { Incident, IncidentProps } from '../../../components/organisms/Incident';

import { countTotalDonationsAmount } from '../../../utils/incident';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer,
  Card
} from './styles';

export function DetailsDonor() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const [accumulatedDonations, setAccumulatedDonations] = useState(0);

  useEffect(useCallback(function() {
    setAccumulatedDonations(countTotalDonationsAmount(routeParams.donations))
    }, [])
  );
  
  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Doador"
        subtitle={'Esses são os dados do salvador \ndo incidente :)'}
      />

      <Incident 
        data={routeParams}
        showTrash={false}
        accumulatedDonations={accumulatedDonations}
      />

      <Footer>
        <Card>
          <Button 
            first
            title="Email" 
            color={theme.colors.darkblue}
          />
          <Button 
            title="Whatsapp" 
            color={theme.colors.green}
          />
        </Card>
      </Footer>
    </Background>
  );
}