import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Presentation } from '../../../components/molecules/Presentation';
// import { FormAuth } from '../../../components/atoms/FormAuth';
import { InputLogin } from '../../../components/molecules/InputLogin';
import { Button } from '../../../components/atoms/Button';
import { ContainerSquareTriangule } from '../../../components/molecules/ContainerSquareTriangule';
// import { ContentFormRegister } from '../../../components/molecules/ContentFormRegister';
// import { ItemAuth, ItemProps } from '../../../components/templates/ItemAuth';

import { OwnerProps, useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  FormTitle,
  Footer
} from './styles';

type RenderProps = {
  key: string;
}

export type ItemProps = {
  key: string;
  title: string;
  render: ({ key }: RenderProps) => JSX.Element;
}

export function Register01(){
  const { owner } = useAuth();

  const [primaryInput, setPrimaryInput] = useState('');
  const [secondaryInput, setSecondaryInput] = useState('');

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      title: '01. Qual a ONG?',
      render: (_: RenderProps) => (
        <>
          <InputLogin 
            placeholder="Nome do responsável"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setPrimaryInput}
          />
      
          <InputLogin 
            placeholder="Nome da ONG"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setSecondaryInput}
          />
        </>
      )
    },
    {
      key: 'donor',
      title: "01. Quem é você?",
      render: (_: RenderProps) => (
        <>
          <InputLogin 
            placeholder="Seu nome"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setPrimaryInput}
          />
      
          <InputLogin 
            placeholder="Whatsapp"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setSecondaryInput}
          />
        </>
      )
    }
  ];

  function handleNavigateToRegister02() {
    navigate('Register02', {
      primaryInput,
      secondaryInput
    });
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

          <Form>

            <FormTitle>
              {
                items.map(({ key, title }) => {
                  return key === owner ? title : <></>;
                })
              }
            </FormTitle>

            {
              items.map(({ key, render }) => {
                return key === owner ? render({ key }) : <></>;
              })
            }
            {/* <ItemAuth data={items} /> */}
          </Form>

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