import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { CardDetailsUser } from '../../../components/molecules/CardDetailsUser';
import { IncidentProps } from '../../../components/organisms/Incident';


import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';


export function DetailsDonor() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;
  
  const [giver, setGiver] = useState('Hállan da Silva Costa');
  const [coast, setCoast] = useState('R$ 120,00');
  const [whatsapp, setWhatsapp] = useState('18997676538');

  /**
   * Pegar os dados do doado que é o giver e o número whatsapp e montar 
   * uma estrutura, usar a estrutura que o mão fez na api
   */

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
        coast={routeParams.coast}
      />

      <Footer>
        <Button 
          title="Email" 
          color={theme.colors.darkblue}
        />
        <Button 
          title="Whatsapp" 
          color={theme.colors.green}
        />
      </Footer>
    </Background>
  );
}