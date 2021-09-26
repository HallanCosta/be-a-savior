import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { Presentation } from '../../../components/Presentation';
import { InputLogin } from '../../../components/InputLogin';
import { Button } from '../../../components/Button';
import { CheckBoxRemember } from '../../../components/CheckBoxRemember';
import { RegisterSubtitle } from '../../../components/RegisterSubtitle';
import { FormAuth } from '../../../components/FormAuth';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Footer
} from './styles';

export function Login() {
  const { user, owner } = useAuth();
  
  const { navigate } = useNavigation();
  
  function handleSignIn() {
    alert('Entrar');
  }

  function handleNavigateToRegister() {
    navigate('RegisterOng01');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background gradient={owner}>
        <Container>
          <Header 
            left={<ButtonGoBack />}
          />

          <Presentation 
            title={'Ocorreu novos \nincidentes? \nFaça seu login'}
            subtitle={'Sempre ajude quem \nprecisa.'}
          />

          <FormAuth>
            <InputLogin  
              placeholder="Telefone ou Email"  
              placeholderTextColor="#FFFFFF"
            />

            <InputLogin  
              placeholder="Senha"  
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />
          </FormAuth>
          
          <CheckBoxRemember />

          <Footer>
            <RegisterSubtitle onPress={handleNavigateToRegister} />
            
            <Button 
              title="Entrar"
              color="#FFFFFF"
              onPress={handleSignIn}
            />
          </Footer>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}