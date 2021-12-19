import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Presentation } from '../../../components/molecules/Presentation';
import { InputLogin } from '../../../components/molecules/InputLogin';
import { Button } from '../../../components/atoms/Button';
import { CheckBoxRemember } from '../../../components/molecules/CheckBoxRemember';
import { RegisterSubtitle } from '../../../components/molecules/LoginFooterDescription';
import { FormAuth } from '../../../components/atoms/FormAuth';

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