import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
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

import { api } from '../../../services/api';

import {
  styles,
  KeyboardAvoidingView,
  Container,
  Footer
} from './styles';

export function Login() {
  const { owner, signIn } = useAuth();
  
  const { navigate } = useNavigation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [isChecked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!isChecked);
  }
  
  function handleSignIn() {
    const account = {
      email: login,
      password
    };

    api.post(`${owner}s/login`, account)
      .then(response => {
        signIn(response.data.token, isChecked);
      })
      .catch(err => {
        Alert.alert('Oops...', 'Não foi possível efetuar login');
      });
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
              onChangeText={setLogin}
            />

            <InputLogin  
              secureTextEntry
              placeholder="Senha"  
              placeholderTextColor="#FFFFFF"
              onChangeText={setPassword}
            />
          </FormAuth>
          
          <CheckBoxRemember 
            status={isChecked}
            onPress={handleCheck}
          />

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