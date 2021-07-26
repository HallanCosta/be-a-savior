import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { ButtonBig } from '../../../components/ButtonBig';
import { Presentation } from '../../../components/Presentation';
import { ButtonLogout } from '../../../components/ButtonLogout';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  function handleNavigateToCreateIncident() {
    navigate('CreateIncident');
  }

  function handleNavigateToListIncident() {
    navigate('MyIncidents');
  }

  return (
    <Background gradient="ong">
      <Header 
        title="Raio de Sol"
        right={<ButtonLogout gradient="ong" />}
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
    </Background>
  );
}