import React, { useState } from 'react';

// import { Background } from '../../../components/Background';
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

export function DetailsDonor() {
  const [giver, setGiver] = useState('Hállan da Silva Costa');
  const [coast, setCoast] = useState('R$ 120,00');
  const [whatsapp, setWhatsapp] = useState('18997676538');

  return (
    <Container>
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
          color={theme.colors.blue}
        />
        <Button 
          title="Whatsapp" 
          color={theme.colors.green}
        />
      </Footer>
    </Container>
  );
}