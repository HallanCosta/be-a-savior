import React, { useState } from 'react';

import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { CardDetailsUser } from '../../../components/molecules/CardDetailsUser';
import { Incident, IncidentProps } from '../../../components/organisms/Incident';


import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';

export function DetailsOng() {
  const [ong, setOng] = useState('Raio de Sol');
  const [cost, setCost] = useState('1200');
  
  return (
    <Background gradient="donor">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Dados da ONG"
        subtitle={'Esses são os dados da ong \nque publicou o incidente. \nEntre em contato :)'}
      />

      <CardDetailsUser 
        name={ong}
        description="Donor > Details Ong"
        cost={cost}
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