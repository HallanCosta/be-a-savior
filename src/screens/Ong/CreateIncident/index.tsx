import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { IncidentProps } from '../../../components/organisms/Incident';

import { currency } from '../../../utils/currencyFormat';
import { 
  validateIncidentDatas, 
  OmmitValidationIncidentProps 
} from '../../../utils/incident';

import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';

export function CreateIncident(){
  const { headers } = useAuth();

  const { navigate } = useNavigation();

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [cost, setCost] = useState(0); 

  function handleNavigateToHome() {
    navigate('Home');
  }

  function handleSaveIncident(data: OmmitValidationIncidentProps) {
    api.post('incidents', data, headers)
      .then(response => handleNavigateToHome())
      .catch(err => Alert.alert('Ops!', 'Não foi possível salvar o incidente.'));
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background gradient="ong">
        <Container>
          <Header 
            left={ <ButtonGoBack /> } 
          />

          <Presentation 
            title="Crie um incidente"
          />

          <Form>
            <Input 
              title="Nome:"
              value={name}
              onChangeText={setName}
            />
            <TextArea 
              title="Descrição:"
              value={description}
              onChangeText={setDescription}
            />
            <Input 
              title="Valor:"
              value={currency.formatted(String(cost))}
              onChangeText={value => setCost(currency.unFormatted(value))}
            />
          </Form>

          <Footer>
            <Button 
              title="Salvar" 
              color={theme.colors.save}
              onPress={() => {
                validateIncidentDatas({ 
                  name, 
                  description, 
                  cost,
                  action: handleSaveIncident
                });
              }}
            />
          </Footer>
          
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}