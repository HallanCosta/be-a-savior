import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Presentation } from '../../../components/molecules/Presentation';
import { FormAuth } from '../../../components/atoms/FormAuth';
import { Button } from '../../../components/atoms/Button';
import { ContainerSquareTriangule } from '../../../components/molecules/ContainerSquareTriangule';
import { ContentFormRegister } from '../../../components/molecules/ContentFormRegister';
import { ItemProps, ItemAuth } from '../../../components/templates/ItemAuth';
import { InputLogin } from '../../../components/molecules/InputLogin';
import { useNavigation } from '@react-navigation/native';

import { OwnerProps, useAuth, UserProps } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Title,
  Footer
} from './styles';

export function Register03(){
  const { owner } = useAuth();

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      render: () => (
        <ContentFormRegister 
          title="03. Defina sua senha"
          firstInput={() => (
            <InputLogin 
              placeholder="Senha"  
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />
          )}
          secondInput={() => (
            <InputLogin 
              placeholder="Confirmar senha"  
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />
          )}
        />
      )
    }
  ]

  function handleMessageRegisterSuccess() {
    navigate('RegisterSuccess');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background gradient={owner}>
        <Container>
          <Header 
            left={<ButtonGoBack />}
          />

          <Presentation 
            title={'Proteja sua senha. \nNunca passe a \nninguém.'}
          />

          <FormAuth>
            <ItemAuth data={items} />
          </FormAuth>

          <ContainerSquareTriangule>
            <Button 
              title="Concluído"
              color={theme.colors.green}
              onPress={handleMessageRegisterSuccess}
            />
          </ContainerSquareTriangule>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}