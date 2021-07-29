import React, { useState } from 'react';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { Presentation } from '../../../components/Presentation';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { CardDetailsUser } from '../../../components/CardDetailsUser';
import { Button } from '../../../components/Button';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';

export function DetailsOng() {
  const [ong, setOng] = useState('Raio de Sol');
  const [coast, setCoast] = useState('R$ 120,00');
  const [whatsapp, setWhatsapp] = useState('18997676538');

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
        coast={coast}
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