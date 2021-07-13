import React from 'react';
import { Platform, View, ScrollView } from 'react-native';

import { Background } from '../../../components/Background';
import { Input } from '../../../components/Input';
import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';
import { Presentation } from '../../../components/Presentation';
import { ButtonGoBack } from '../../../components/ButtonGoBack';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Form,
  ContentButton,
  KeyboardAvoidingView
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
            <Input 
              title="Descrição:"
            />
            <Input 
              title="Valor:"
            />
          </Form>

          <ContentButton>
            <Button 
              title="Salvar" 
              color={theme.colors.tertiaryOng}
            />
            <Button 
              title="Cancelar"
              color={theme.colors.secondaryOng}
            />
          </ContentButton>
          
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}