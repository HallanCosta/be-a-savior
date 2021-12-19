import React, { ReactNode, useEffect } from 'react';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ongImg from '../../../assets/images/ong.png';
import donorImg from '../../../assets/images/donor.png';

import { Background } from '../../../components/atoms/Background';
import { Header } from '../../../components/molecules/Header';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { Portrait } from '../../../components/atoms/Portrait';
import { Button } from '../../../components/atoms/Button';
import { ContentLanding } from '../../../components/molecules/ContentLanding';
import { ItemAuth, ItemProps } from '../../../components/templates/ItemAuth';

import { OwnerProps, useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  Container,
  Footer
} from './styles';

export function Landing() {
  const { user, owner } = useAuth(); 
  const ownerSerialized = owner as Exclude<OwnerProps, 'guest'>;

  const { navigate } = useNavigation();

  const items: ItemProps[] = [
    {
      key: 'ong',
      render: () => (
        <ContentLanding 
          title={'Crie uma ONG e ajude \ndiversas necessidades.'}
          subtitle={'Faça do mundo um lugar cada \nvez melhor.'}
          img={ongImg}
        />
      )
    },
    {
      key: 'donor',
      render: () => (
        <ContentLanding 
          title={'Seja um salvador e \njunte se a nós.'}
          subtitle={'Ajude ONGs de todos \nos tipos sendo um doado fiel.'}
          img={donorImg}
        />
      )
    }
  ];

  function handleNavigateToRegister() {
    navigate('Register01');
  }

  function handleNavigateToLogin() {
    navigate('Login');
  }

  return (
    <Background gradient={ownerSerialized}>
      <Container>
        <Header 
          left={<ButtonGoBack />}
        />
        
        <ItemAuth data={items} />
    
        <Footer>
          <Button 
            color={theme.colors.donor.background100}
            title="Registrar"
            onPress={handleNavigateToRegister}
          />

          <Button 
            color="#FFFFFF"
            title="Entrar"
            onPress={handleNavigateToLogin}
          />
        </Footer>
      </Container>
    </Background>
  );
}