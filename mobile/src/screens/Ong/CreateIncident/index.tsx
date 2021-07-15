import React from 'react';
import { Platform, View, ScrollView } from 'react-native';

import { Background } from '../../../components/Background';
import { Input } from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';
import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';
import { Presentation } from '../../../components/Presentation';
import { ButtonGoBack } from '../../../components/ButtonGoBack';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';

export function CreateIncident(){
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
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
            />
            <TextArea 
              title="Descrição:"
            />
            <Input 
              title="Valor:"
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