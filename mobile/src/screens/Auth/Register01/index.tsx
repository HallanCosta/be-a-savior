import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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

import { useAuth, OwnerProps } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Title,
  Footer
} from './styles';

export function Register01(){
  const { owner } = useAuth();

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      render: () => (
        <ContentFormRegister 
          title="01. Qual a ONG?"
          firstInput="Nome do responsável"
          secondInput="Nome da ONG"
        />
      )
    },
    {
      key: 'donor',
      render: () => (
        <ContentFormRegister 
          title={'01. Quem é você?'}
          firstInput={'Seu nome'}
          secondInput={'Whatsapp'}
        />
      )
    }
  ];

  function handleNavigateToRegister02() {
    navigate('Register02');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background gradient={owner}>
        <Container>
          <Header 
            left={<ButtonGoBack />}
          />

          <Presentation 
            title={'Se junte a nós e venha \nfazer a diferença!'}
            subtitle={'Basta preencher os seguintes \ndados.'}
          />

          <FormAuth>
            <ItemAuth data={items} />
          </FormAuth>

          <ContainerSquareTriangule>
            <Button 
              title="Próximo"
              color={theme.colors.donor.background100}
              onPress={handleNavigateToRegister02}
            />
          </ContainerSquareTriangule>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}