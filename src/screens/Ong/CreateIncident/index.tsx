import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';

import { api } from '../../../services/api';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';
import { currencyFormat } from '../../../utils/currencyFormat';



export function CreateIncident(){
  const { navigate } = useNavigation();

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [cost, setCost] = useState(''); 

  function handleSaveIncident() {
    const incident = {
      name,
      description,
      cost
    };

    api.post('incidents', incident)
      .then(response => handleNavigateToHome())
      .catch(err => Alert.alert('Ooops!', 'Não foi possível salvar o incidente.'));
  }

  function handleNavigateToHome() {
    Alert.alert('Sucesso', 'O incidente foi cadastrado com sucesso.');
    navigate('Home');
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
              onChangeText={setName}
            />
            <TextArea 
              title="Descrição:"
              onChangeText={setDescription}
            />
            <Input 
              title="Valor:"
              onChangeText={setCost}
            />
          </Form>

          <Footer>
            <Button 
              title="Salvar" 
              color={theme.colors.save}
              onPress={handleSaveIncident}
            />
          </Footer>
          
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}