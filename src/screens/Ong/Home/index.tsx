import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonBig } from '../../../components/atoms/ButtonBig';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';

import { OwnerProps, useAuth } from '../../../hooks/auth';

import { COLLECTION_USERS } from '../../../configs/database';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  const { owner, signOut, user } = useAuth();

  function handleNavigateToCreateIncident() {
    navigate('CreateIncident');
  }

  function handleNavigateToListIncident() {
    navigate('MyIncidents');
  }

  return (
    <Background gradient={user?.owner as OwnerProps || owner}>
      <Container>
        <Header 
          title="Raio de Sol"
          right={<ButtonLogout gradient={owner} onPress={signOut} />}
        />

        <Presentation
          title="Seja bem vindo!"
          subtitle={'Crie incidentes e comece\n já a ajudar.'}
        />
    
        <Content>
          <ButtonBig 
            title={'Criar\n Incidente'} 
            color={theme.colors.green}
            onPress={handleNavigateToCreateIncident}
          />
  
          <ButtonBig 
            title={'Meus\n Incidente'} 
            color={theme.colors.blue}
            onPress={handleNavigateToListIncident}
          />
        </Content>
      </Container>
    </Background>
  );
}