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
import { DonationProps, IncidentProps } from '../../../components/organisms/Incident';

import { countTotalDonationsAmount, isEquivalentObject } from '../../../utils/incident';
import { currency } from '../../../utils/currencyFormat';

import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import { useOng } from '../../../hooks/ong';

import { theme } from '../../../global/styles/theme';
import { 
  styles, 
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';
import { Load } from '../../../components/atoms/Load';

type EditIncidentProps = Omit<IncidentProps, "donations"|"user_id">;
type UpdateIncidentProps = Omit<EditIncidentProps, "id">;

export function EditIncident(){
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as EditIncidentProps;

  const { headers } = useAuth();
  const { loadIncident } = useOng();

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [cost, setCost] = useState(1); 
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setName(routeParams.name);
      setDescription(routeParams.description);
      setCost(routeParams.cost);
    },[]), 
  );

  function handleNavigateToMyIncidents() {
    navigate('MyIncidents');
  }

  function handleUpdateIncident(incident: UpdateIncidentProps) {
    api.patch(`incidents/${routeParams.id}`, incident, headers)
      .then(response => handleNavigateToMyIncidents())
      .catch(error => Alert.alert('Ops', 'Não foi possível alterar o incidente'));
  }

  const alreadyWasDonated = function(donations: DonationProps[]) {
    const totalDonationsAmount = countTotalDonationsAmount(donations);
    return routeParams.cost === totalDonationsAmount;
  }

  const isEqualIncidentFetched = function(
    incidentFetched: IncidentProps, 
    incident: UpdateIncidentProps
  ): boolean {

    const newIncidentFetched = {
      name: incidentFetched.name,
      description: incidentFetched.description,
      cost: incidentFetched.cost
    }

    return isEquivalentObject(newIncidentFetched, incident);
  }

  function validateIncidentDatas() {
    setLoading(true);

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
      .then(async function(data) {
        const incidentFetched = await loadIncident(routeParams.id);
        
        const { donations } = incidentFetched;

        if(alreadyWasDonated(donations)) {
          Alert.alert(
            'Incidente já doado', 
            'Esse incidente acabou de atingir o limite de doações, portanto, não é possível edita-lo.'
          );
          handleNavigateToMyIncidents();
        } else if (isEqualIncidentFetched(incidentFetched, data)) {
          Alert.alert(
            'Não atualizado', 
            'Os dados não teve alteração, portanto, não foi possível atualiza-lo.'
          );
          setLoading(false);
        } else {
          handleUpdateIncident(data); 
          Alert.alert('Sucesso', 'O incidente foi atualizado com sucesso!')
        }
      })
      .catch(function (err) {
        Alert.alert('Erro de validação', err.errors.message);
      });
  }

  return (
    <KeyboardAvoidingView>
      <Background gradient="ong">
        { 
          loading
          ?
          <Load />
          :
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
                title="Custo"
                value={currency.formatted(String(cost))}
                onChangeText={value => setCost(currency.unFormatted(value))}
              />
            </Form>
          
            <Footer>
              <Button
                title="Atualizar" 
                color={theme.colors.save}
                onPress={validateIncidentDatas}
              />
            </Footer>
          </Container>
        }
      </Background>
    </KeyboardAvoidingView>
  );
}