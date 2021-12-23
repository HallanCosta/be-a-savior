import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Presentation } from '../../../components/molecules/Presentation';

import { IncidentProps } from '../../../components/organisms/Incident';

import { theme } from '../../../global/styles/theme';
import { 
  styles, 
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';

// type Params =  {
//   id: number;
//   name: string;
//   description: string;
//   coast: string;
//   donated: boolean;
// }

export function EditIncident(){
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const [incident, setIncident] = useState('Gatinho sofreu um acidente na estrada.');
  const [description, setDescription] = useState('Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.');
  const [coast, setCoast] = useState('R$ 120,00');

  function handleNavigateToDetailsDoner() {
    navigate('DetailsDonor');
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
              value={routeParams.name}
            />

            <TextArea 
              title="Descrição"
              value={routeParams.description}
              multiline
            />

            <Input 
              title="Valor"
              value={routeParams.coast}
            />
          </Form>
        
          <Footer>
            <Button
              title="Salvar" 
              color={theme.colors.save}
            />
          </Footer>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}