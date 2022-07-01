import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import * as yup from 'yup';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Presentation } from '../../../components/molecules/Presentation';
import { IncidentProps } from '../../../components/organisms/Incident';

import { currencyFormatBRL, currencyUnformatBRL } from '../../../utils/currencyFormat';

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

type EditIncidentProps = Omit<IncidentProps, "donations"|"user_id">;
type UpdateIncidentProps = Omit<EditIncidentProps, "id">;

export function EditIncident(){
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as EditIncidentProps;

  const { user } = useAuth();

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [cost, setCost] = useState(''); 

  useFocusEffect(
    useCallback(() => {
      setName(routeParams.name);
      setDescription(routeParams.description);
      setCost(String(routeParams.cost));
    },[]), 
  );

  function handleUpdateIncident(incident: UpdateIncidentProps) {
    const headers = {
      'authorization': `Bearer ${user?.token}`
    };

    api.patch(
      `incidents/${routeParams.id}`, 
      incident, 
      { headers }
    )
      .then(response => handleNavigateToMyIncidents())
      .catch(error => Alert.alert('Oops', 'Não foi possível alterar o incidente'));
  }

  function handleNavigateToMyIncidents() {
    navigate('MyIncidents');
  } function validateDataIncident() {
    const incident = {
      name,
      description,
      cost
    };

    yup.setLocale({
      number: {
        min: 'Deve ser igual ou maior que ${min}',
      },
    });

    const incidentSchema = yup.object().shape({
      name: yup.string().required(),
      description: yup.string().required(),
      cost: yup.number().min(1).required(),
    });

    incidentSchema.cast(incident);

    incidentSchema.validate(incident)
      .then(function(data) {
        handleUpdateIncident(data);
        Alert.alert('Sucesso', 'O incidente foi atualizado com sucesso!')
      })
      .catch(function (err) {
        Alert.alert(err.name, err.errors);
      });
  }

  const currency = {
    formatted: function(value: string) {
      const formattedNumber = currencyFormatBRL(Number(value));
      return formattedNumber;
    },

    unFormatted: function(value: string) {
      const unFormattedNumber = currencyUnformatBRL(value);
      setCost(unFormattedNumber);
    }
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
              value={currency.formatted(cost)}
              onChangeText={currency.unFormatted}
            />
          </Form>
        
          <Footer>
            <Button
              title="Atualizar" 
              color={theme.colors.save}
              onPress={validateDataIncident}
            />
          </Footer>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}