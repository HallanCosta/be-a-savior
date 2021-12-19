import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Presentation } from '../../../components/molecules/Presentation';
import { FormAuth } from '../../../components/atoms/FormAuth';
import { InputLogin } from '../../../components/molecules/InputLogin';
import { Button } from '../../../components/atoms/Button';
import { ContainerSquareTriangule } from '../../../components/molecules/ContainerSquareTriangule';
import { ContentFormRegister } from '../../../components/molecules/ContentFormRegister';
import { ItemAuth, ItemProps } from '../../../components/templates/ItemAuth';

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
          firstInput={() => (
            <InputLogin 
              placeholder="Whatsapp"  
              placeholderTextColor="#FFFFFF"
            />
          )}
          secondInput={() => (
            <InputLogin 
              placeholder="Email"  
              placeholderTextColor="#FFFFFF"
            />
          )}
        />
      )
    },
    {
      key: 'donor',
      render: () => (
        <ContentFormRegister 
          title="02. Email e Senha"
          firstInput={() => (
            <InputLogin 
              placeholder="Email"  
              placeholderTextColor="#FFFFFF"
            />
          )}
          secondInput={() => (
            <InputLogin 
              placeholder="Senha"  
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />
          )}
          thirdInput={() => (
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