import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { CardDetailsUser } from '../../../components/molecules/CardDetailsUser';
import { IncidentProps } from '../../../components/organisms/Incident';

import { currencyFormat } from '../../../utils/currencyFormat';

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

  useEffect(() => {
    console.log('Route params: ', routeParams);
  }, []);
  
  const [giver, setGiver] = useState('Hállan da Silva Costa');
  const [coast, setCoast] = useState('R$ 120,00');
  const [whatsapp, setWhatsapp] = useState('18997676538');

  return (
    <Background gradient="ong">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Doador"
        subtitle={'Esses são os dados do salvador \ndo incidente :)'}
      />

      <CardDetailsUser 
        name={giver}
        coast={currencyFormat(routeParams.cost)}
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