import React, { useState } from 'react';

import { 
  styles,
  Container,
  Form,
  Line
} from './styles';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { Presentation } from '../../../components/Presentation';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { InputCard } from '../../../components/InputCard';
import { ButtonsDonate } from '../../../components/ButtonsDonate';

export function DonateIncident() {
  const [incident, setIncident] = useState('Gatinho sofreu um acidente na estrada.');
  const [description, setDescription] = useState('Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.');
  const [coast, setCoast] = useState('R$ 120,00');
  
  return (
    <Background gradient="donor">
      <Header 
        left={<ButtonGoBack />}
      />

      <Presentation 
        title="Doar"
      />

      <Form>
        <InputCard
          title="Incidente"
          subtitle={incident}
        />

        <InputCard
          title="Descrição"
          subtitle={description}
        />

        <InputCard
          title="Valor"
          subtitle={coast}
        />

        <Line />

        <ButtonsDonate />
      </Form>

    
    </Background>
  );
}