import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonBig } from '../../../components/atoms/ButtonBig';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonLogout } from '../../../components/atoms/ButtonLogout';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Content
} from './styles';

export function Home(){
  const { navigate } = useNavigation();

  const { owner, signOut } = useAuth();

  function handleNavigateToDonationHistory() {
    // navigate('DonationHistory');
    Alert.alert('Navigate', 'Levar para o histórico de doações!!');
  }

  function handleNavigateToShowIncidents() {
    navigate('ShowIncidents');
  }
  
  return (
    <Background gradient={owner}>
      <Header 
        right={<ButtonLogout gradient={owner} onPress={signOut} />}
      />

      <Presentation
        title={'Olá Hállan. \nSeja bem vindo'}
        subtitle={'Ajude os incidentes sendo \num doador fiel.'}
      />
   
      <Content>
  
        <ButtonBig 
          title={'Histórico\n de doações'} 
          color={theme.colors.blue}
          onPress={handleNavigateToDonationHistory}
        />

        <ButtonBig 
          title={'Visualizar\n Incidentes'} 
          color={theme.colors.green}
          onPress={handleNavigateToShowIncidents}
        />
      </Content>
    </Background>
  );
}