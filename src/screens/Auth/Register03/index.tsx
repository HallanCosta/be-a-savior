import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { Presentation } from '../../../components/Presentation';
import { FormAuth } from '../../../components/FormAuth';
import { Button } from '../../../components/Button';
import { ContainerSquareTriangule } from '../../../components/ContainerSquareTriangule';
import { ContentFormRegister } from '../../../components/ContentFormRegister';
import { ItemProps, ItemAuth } from '../../../components/ItemAuth';
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
          firstInput="Senha"
          secondInput="Confirmar senha"
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