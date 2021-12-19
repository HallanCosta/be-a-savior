import React from 'react';
import { Platform, View, ScrollView } from 'react-native';

import { Background } from '../../../components/atoms/Background';
import { Input } from '../../../components/molecules/Input';
import { TextArea } from '../../../components/molecules/TextArea';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  Footer
} from './styles';
import { Button } from '../../../components/atoms/Button';

export function CreateIncident(){
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
              color={theme.colors.save}
            />
          </Footer>
          
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}