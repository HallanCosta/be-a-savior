import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Presentation } from '../../../components/molecules/Presentation';
import { MessageCreatedSuccess } from '../../../components/molecules/MessageCreatedSuccess';

import { IncidentProps } from '../../../components/organisms/Incident';


import { theme } from '../../../global/styles/theme';
import { 
  styles, 
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';
import { api } from '../../../services/api';
import { useAuth, UserProps } from '../../../hooks/auth';
import { Alert } from 'react-native';

export function EditIncident(){
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const { user: userAuth } = useAuth();

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [cost, setCost] = useState(''); 

  useEffect(() => {
    setName(routeParams.name);
    setDescription(routeParams.description);
    setCost(String(routeParams.cost));
  }, []);

  function handleUpdateIncident() {
    const user = userAuth as UserProps;

    const incident = {
      name: name,
      description: description,
      cost: Number(cost)
    };

    api.patch(`incidents/${routeParams.id}`, incident)
      .then(response => handleNavigateToMyIncidents())
      .catch(error => Alert.alert('Oops', 'Não foi possível alterar o incident'));
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