import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Presentation } from '../../../components/molecules/Presentation';

import { api } from '../../../services/api';

import { IncidentProps } from '../../../hooks/ong';
import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import { 
  styles, 
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';

export function EditIncident(){
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const { user } = useAuth();

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [cost, setCost] = useState(''); 

  useEffect(() => {
    setName(routeParams.name);
    setDescription(routeParams.description);
    setCost(String(routeParams.cost));
  }, []);

  function handleUpdateIncident() {
    const incident = {
      name: name,
      description: description,
      cost: Number(cost)
    };

    const headers = {
      'authorization': `Bearer ${user?.token}`
    };

    api.patch(`incidents/${routeParams.id}`, incident, {
      headers: headers
    })
      .then(response => handleNavigateToMyIncidents())
      .catch(error => Alert.alert('Oops', 'Não foi possível alterar o incidente'));
  }

  function handleNavigateToMyIncidents() {
    Alert.alert('Sucesso', 'O incidente foi atualizado com sucesso!')
    navigate('MyIncidents');
  }

  return (
    <KeyboardAvoidingView>
      <Background gradient="ong">
        <Container>
          <Header 
            left={ <ButtonGoBack /> }
          />

          <Presentation 
            title="Editar incidente"
          />

          <Form>
            <Input 
              title="Incidente"
              value={name}
              onChangeText={setName}
            />

            <TextArea 
              title="Descrição"
              value={description}
              multiline
              onChangeText={setDescription}
            />

            <Input 
              title="Valor"
              value={cost}
              onChangeText={setCost}
            />
          </Form>
        
          <Footer>
            <Button
              title="Atualizar" 
              color={theme.colors.save}
              onPress={handleUpdateIncident}
            />
          </Footer>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}