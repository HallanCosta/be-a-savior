import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonBig } from '../../../components/atoms/ButtonBig';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';

import { OwnerProps, useAuth } from '../../../hooks/auth';
import { useOng } from '../../../hooks/ong';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  const { owner, signOut, user } = useAuth();
  const { setIncidents } = useOng();

  function handleNavigateToCreateIncident() {
    navigate('CreateIncident');
  }

  function handleNavigateToListIncident() {
    navigate('MyIncidents');
  }

  function handleSignOut() {
    setIncidents([]);
    signOut();
  }

  return (
    <Background gradient={user?.owner as OwnerProps || owner}>
      {
        <Container>
          <Header 
            title="Raio de Sol"
            right={<ButtonLogout gradient={owner} onPress={handleSignOut} />}
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
              onPress={() => {
                console.log('> Home -> My Incidents');
                handleNavigateToListIncident()
              }}
            />
          </Content>
        </Container>
      }
    </Background>
  );
}