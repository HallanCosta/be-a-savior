import React, { useState } from 'react';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { CardDetailsUser } from '../../../components/molecules/CardDetailsUser';
import { Button } from '../../../components/atoms/Button';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';

export function DetailsDonor() {
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