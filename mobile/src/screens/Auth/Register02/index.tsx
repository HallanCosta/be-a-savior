import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { ButtonGoBack } from '../../../components/ButtonGoBack';
import { Presentation } from '../../../components/Presentation';
import { FormAuth } from '../../../components/FormAuth';
import { InputLogin } from '../../../components/InputLogin';
import { Button } from '../../../components/Button';
import { ContainerSquareTriangule } from '../../../components/ContainerSquareTriangule';
import { ContentFormRegister } from '../../../components/ContentFormRegister';
import { ItemAuth, ItemProps } from '../../../components/ItemAuth';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Title,
  Footer
} from './styles';

export function Register02() {
  const { owner } = useAuth();

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      render: () => (
        <ContentFormRegister 
          title="02. Contato"
          firstInput="Whatsapp"
          secondInput="Email"
        />
      )
    },
    {
      key: 'donor',
      render: () => (
        <ContentFormRegister 
          title="02. Email e Senha"
          firstInput="Email"
          secondInput="Senha"
          thirdInput="Confirmar senha"
        />
      )
    }
  ]

  function handleMessageRegisterSuccess() {
    navigate('RegisterSuccess');
  }

  function handleNavigateToRegister03() {
    navigate('Register03');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background gradient={owner}>
        <Container>
          <Header 
            left={<ButtonGoBack />}
          />

          <Presentation 
            title={'Precisamos de alguns \nmeios de contatos \nseus.'}
          />

          <FormAuth>
            <ItemAuth data={items} />
          </FormAuth>

          <ContainerSquareTriangule>
            <Button 
              title="Próximo"
              color={theme.colors.donor.background100}
              onPress={ 
                owner === 'ong' 
                ? handleNavigateToRegister03 
                : handleMessageRegisterSuccess
              }
            />
          </ContainerSquareTriangule>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}