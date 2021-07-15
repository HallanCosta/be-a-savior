import React, { useState } from 'react';

import { Background } from '../../../components/Background';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import { Presentation } from '../../../components/Presentation';
import { ButtonDetailsUser } from '../../../components/ButtonDetailsUser';

import { theme } from '../../../global/styles/theme';
import { 
  styles, 
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';

export function EditIncident(){
  const [incident, setIncident] = useState('Gatinho sofreu um acidente na estrada.');
  const [description, setDescription] = useState('Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.');
  const [coast, setCoast] = useState('R$ 120,00');

  return (
    <KeyboardAvoidingView>
      <Background>
        <Container>
          <Header 
            left={ <ButtonGoBack /> }
            right={ <ButtonDetailsUser /> }
          />

          <Presentation 
            title="Detalhes do incidente"
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
              color={theme.colors.tertiaryOng}
            />
            <Button 
              title="Cancelar"
              color={theme.colors.secondaryOng}
            />
          </Footer>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}