import React, { useEffect, useState } from 'react';
import { Platform, View, Alert } from 'react-native';
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

import { useAuth } from '../../../hooks/auth';

import { api } from '../../../services/api';

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
};

type ItemProps = {
  key: string;
  title: string;
  button: ({ key }: RenderProps) => JSX.Element;
  render: ({ key }: RenderProps) => JSX.Element;
}

type Register01Props = {
  primaryInput: string;
  secondaryInput: string;
}

export function Register02() {
  const { owner } = useAuth();

  const route = useRoute();
  const routeParams = route.params as Register01Props;

  const [primaryInput, setPrimaryInput] = useState('');
  const [secondaryInput, setSecondaryInput] = useState('');
  const [tertiaryInput, setTertiaryInput] = useState('');

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      title: '02. Email e Senha',
      button: ({ key }: RenderProps) => (
        <Button 
          key={key}
          title="Concluído"
          color={theme.colors.save}
          onPress={handleCreateUser}
        />
      ),
      render: ({ key }: RenderProps) => (
        <View key={key}>
          <InputLogin 
            placeholder="Email"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setPrimaryInput}
          />
      
          <InputLogin 
            secureTextEntry
            placeholder="Senha"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setSecondaryInput}
          />

          <InputLogin 
            secureTextEntry
            placeholder="Confirmar senha"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setTertiaryInput}
          />
        </View>
      )
    },
    {
      key: 'donor',
      title: "02. Email e Senha",
      button: ({ key }: RenderProps) => (
        <Button 
          key={key}
          title="Concluído"
          color={theme.colors.save}
          onPress={handleCreateUser}
        />
      ),
      render: ({ key }: RenderProps) => (
        <View key={key}>
          <InputLogin 
            placeholder="Email"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setPrimaryInput}
          />
      
          <InputLogin 
            secureTextEntry
            placeholder="Senha"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setSecondaryInput}
          />

          <InputLogin 
            secureTextEntry
            placeholder="Confirmar senha"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setTertiaryInput}
          />
        </View>
      )
    }
  ];

  function handleMessageRegisterSuccess() {
    navigate('RegisterSuccess');
  }

  function handleCreateUser() {
    const data = {
      name: routeParams.primaryInput,
      phone: routeParams.secondaryInput,
      email: primaryInput,
      password: secondaryInput
    };

    api.post(`${owner}s`, data)
      .then(response => {
        if (response.data.owner === owner) return handleMessageRegisterSuccess();
      })
      .catch(err => {
        Alert.alert('Oops...', 'Não foi possível efetuar seu cadastro');
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
            title={'Precisamos de alguns \nmeios de contatos \nseus.'}
          />
          
          <Form>
            <FormTitle>
              {
                items.map(({ key, title }) => {
                  return key === owner && title;
                })
              }
            </FormTitle>

            {
              items.map(({ key, render }) => {
                return key === owner && render({ key });
              })
            }
          </Form>

          <ContainerSquareTriangule>
            {
              items.map(({ key, button }) => {
                return key === owner && button({ key });
              })
            }
          </ContainerSquareTriangule>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}