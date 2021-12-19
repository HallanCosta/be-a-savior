import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Button } from '../../../components/atoms/Button';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Header } from '../../../components/molecules/Header';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonDetailsUser } from '../../../components/atoms/ButtonDetailsUser';

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
            right={ 
              <ButtonDetailsUser 
                onPress={handleNavigateToDetailsDoner} 
              /> 
            }
          />

          <Presentation 
            title="Editar incidente"
          />

          <Form>
            <Input 
              title="Incidente"
              value={incident}
            />

            <TextArea 
              title="Descrição"
              value={description}
              multiline
            />

            <Input 
              title="Valor"
              value={coast}
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