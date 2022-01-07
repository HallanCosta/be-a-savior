import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Presentation } from '../../../components/molecules/Presentation';
// import { FormAuth } from '../../../components/atoms/FormAuth';
import { Button } from '../../../components/atoms/Button';
import { ContainerSquareTriangule } from '../../../components/molecules/ContainerSquareTriangule';
// import { ContentFormRegister } from '../../../components/molecules/ContentFormRegister';
// import { ItemProps, ItemAuth } from '../../../components/templates/ItemAuth';
import { InputLogin } from '../../../components/molecules/InputLogin';
import { useNavigation, useRoute } from '@react-navigation/native';

import { OwnerProps, useAuth, UserProps } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  FormTitle,
  Footer
} from './styles';
import { api } from '../../../services/api';


type RenderProps = {
  key: string;
};

type ItemProps = {
  key: string;
  title: string;
  render: ({ key }: RenderProps) => JSX.Element;
}

type Register02Props = {
  nameResponsible: string;
  nameOng: string;
  whatsapp: string;
  email: string;
}

export function Register03() {
  const { owner } = useAuth();

  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Register02Props;

  const [primaryInput, setPrimaryInput] = useState('');
  const [secondaryInput, setSecondaryInput] = useState('');

  const items: ItemProps[] = [
    {
      key: 'ong',
      title: '03. Senha',
      render: ({ key }: RenderProps) => (
        <View key={key}>
          <InputLogin 
            placeholder="Senha"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setPrimaryInput}
          />
      
          <InputLogin 
            placeholder="Confirmar Senha"  
            placeholderTextColor="#FFFFFF"
            onChangeText={setSecondaryInput}
          />
        </View>
      )
    }
  ]

  function handleMessageRegisterSuccess() {
    navigate('RegisterSuccess');
  }

  function handleCreateDonor() {
    const createDonor = {
      name: routeParams.nameOng,
      phone: routeParams.whatsapp,
      email: routeParams.email,
      password: primaryInput
    };

    api.post('donors', createDonor)
      .then(response => {
        if (response.data.owner === owner) return handleMessageRegisterSuccess();
      })
      .catch(err => {
        console.log('Error: ', err);
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
            title={'Proteja sua senha. \nNunca passe a \nninguém.'}
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

            {/* <ItemAuth data={items} /> */}
          </Form>

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