import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  styles,
  Container,
  Content,
  Form
} from './styles';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { InputCard } from '../../../components/molecules/InputCard';
// import { ButtonsDonate } from '../../../components/ButtonsDonate';

export function DonateIncident() {
  const { navigate } = useNavigation();

  const [ong, setOng] = useState('Raio de Sol');
  const [incident, setIncident] = useState('Gatinho sofreu um acidente na estrada.');
  const [description, setDescription] = useState('Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.');
  const [coast, setCoast] = useState('R$ 120,00');

  function handleNavigateToDetailsOng() {
    navigate('DetailsOng');
  }
  
  return (
    <Background gradient="donor">
      <Container>
        <Header 
          left={<ButtonGoBack />}
          right={ 
            <ButtonDonatedIncidents 
              onPress={handleNavigateToDetailsOng} 
            /> 
          }
        />

        <Presentation 
          title="Doação"
          subtitle={'Efetue uma doação e ajude \nos incidentes :)'}
        />

        <Content>

          <Form>
            <InputCard
              title="Nome da ONG"
              subtitle={ong}
            />

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

            {/* <LineDivision /> */}

            {/* <ButtonsDonate /> */}
          </Form>
        </Content>
      </Container>
    </Background>
  );
}