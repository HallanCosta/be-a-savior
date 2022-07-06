import React, { useState } from 'react';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Button } from '../../../components/atoms/Button';
import { Incident } from '../../../components/organisms/Incident';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';

export function DetailsOng() {
  const dummy_incident = {
    id: "e72aec86-133b-41d6-947a-8879f133adc6",
    name: "Crocolido amassado",
    description: "ele entrou em choque com um carro",
    totalDonationsAmount: 2000,
    cost: 3200,
    user_id: "338ce628-83b1-4fa9-b336-bf5a3e665bd8",
    donations: [
      {
          id: "d324c42d-7a88-4feb-92b4-45d54c776240",
          amount: 1000,
          incident_id: "e72aec86-133b-41d6-947a-8879f133adc6",
          user_id: "a5941bbf-13b7-4ab4-b1ca-84caa31369d9"
      },
      {
          id: "d324c42d-7a88-4feb-92b4-45d54c776240",
          amount: 1000,
          incident_id: "e72aec86-133b-41d6-947a-8879f133adc6",
          user_id: "a5941bbf-13b7-4ab4-b1ca-84caa31369d9"
      }
    ]
  }

  return (
    <Background gradient="guest">
      <Header 
        left={ <ButtonGoBack /> }
      />

      <Presentation 
        title="Dados da ONG"
        subtitle={'Esses são os dados da ong \nque publicou o incidente. \nEntre em contato :)'}
      />

      <Incident 
        data={dummy_incident}
        accumulatedDonations={1}
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