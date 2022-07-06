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

export function DetailsOng() {
  const [ong, setOng] = useState('Raio de Sol');
  const [cost, setCost] = useState('R$ 120,00');

  return (
    <Background gradient="guest">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Dados da ONG"
        subtitle={'Esses são os dados da ong \nque publicou o incidente. \nEntre em contato :)'}
      />

      <CardDetailsUser 
        name={ong}
        description="Guest > DetailsONg"
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