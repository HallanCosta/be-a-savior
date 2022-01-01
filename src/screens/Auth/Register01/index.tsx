import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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

export function Register01(){
  const { owner } = useAuth();

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      render: () => (
        <ContentFormRegister 
          title="01. Qual a ONG?"
          firstInput={() => (
            <InputLogin 
              placeholder="Nome do responsável"  
              placeholderTextColor="#FFFFFF"
            />
          )}
          secondInput={() => (
            <InputLogin 
              placeholder="Nome da ONG"  
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
          title={'01. Quem é você?'}
          firstInput={() => (
            <InputLogin 
              placeholder="Seu nome"  
              placeholderTextColor="#FFFFFF"
            />
          )}
          secondInput={() => (
            <InputLogin 
              placeholder="Whatsapp"  
              placeholderTextColor="#FFFFFF"
            />
          )}
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